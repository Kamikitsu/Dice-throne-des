
const $ = (selector) => document.querySelector(selector);

const heroSelect = $("#heroSelect");
const heroInfo = $("#heroInfo");
const diceArea = $("#diceArea");
const diceCountEl = $("#diceCount");
const rollCounter = $("#rollCounter");
const rollBtn = $("#rollBtn");
const editDialog = $("#editDialog");
const faceChoices = $("#faceChoices");

const STORAGE_KEY = "dice-throne-local-state-v1";

let state = {
  heroId: "generic",
  diceCount: 5,
  dice: [1,1,1,1,1,1],
  held: [false,false,false,false,false,false],
  rolls: 0
};

let editingIndex = null;

function getHero(){
  return HEROES[state.heroId] || HEROES.generic;
}

function saveState(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return;
    const parsed = JSON.parse(raw);
    if(parsed && HEROES[parsed.heroId]){
      state = {
        heroId: parsed.heroId,
        diceCount: Math.min(6, Math.max(1, Number(parsed.diceCount) || 5)),
        dice: Array.isArray(parsed.dice) ? parsed.dice.slice(0,6) : [1,1,1,1,1,1],
        held: Array.isArray(parsed.held) ? parsed.held.slice(0,6) : [false,false,false,false,false,false],
        rolls: Math.max(0, Number(parsed.rolls) || 0)
      };
      while(state.dice.length < 6) state.dice.push(1);
      while(state.held.length < 6) state.held.push(false);
    }
  }catch(e){
    console.warn("Impossible de restaurer l'état.", e);
  }
}

function buildHeroList(){
  heroSelect.innerHTML = "";
  Object.entries(HEROES).forEach(([id, hero]) => {
    const option = document.createElement("option");
    option.value = id;
    option.textContent = hero.name;
    heroSelect.appendChild(option);
  });
}

function faceFor(value){
  const hero = getHero();
  return hero.faces.find(f => f.value === value) || {value, symbol:"?"};
}

function render(){
  const hero = getHero();

  heroSelect.value = state.heroId;
  heroInfo.textContent = hero.info || "";
  diceCountEl.textContent = state.diceCount;
  rollCounter.textContent = `Lancers : ${state.rolls}`;

  diceArea.innerHTML = "";

  for(let i = 0; i < state.diceCount; i++){
    const face = faceFor(state.dice[i]);

    const wrap = document.createElement("div");
    wrap.className = "die-card";

    const die = document.createElement("div");
    die.className = "die" + (state.held[i] ? " held" : "");
    die.setAttribute("role","button");
    die.setAttribute("tabindex","0");
    die.setAttribute("aria-label", `Dé ${i+1}, face ${face.value}, ${face.symbol}`);

    die.innerHTML = `
      ${state.held[i] ? '<span class="hold-badge">GARDÉ</span>' : ''}
      <div class="die-number">${face.value}</div>
      <div class="die-symbol">${face.symbol}</div>
    `;

    const toggleHold = () => {
      state.held[i] = !state.held[i];
      saveState();
      render();
    };

    die.addEventListener("click", toggleHold);
    die.addEventListener("keydown", (e) => {
      if(e.key === "Enter" || e.key === " "){
        e.preventDefault();
        toggleHold();
      }
    });

    const edit = document.createElement("button");
    edit.className = "die-edit";
    edit.type = "button";
    edit.textContent = "Modifier";
    edit.addEventListener("click", () => openEditor(i));

    wrap.appendChild(die);
    wrap.appendChild(edit);
    diceArea.appendChild(wrap);
  }

  saveState();
}

function rollDice(){

  for(let i = 0; i < state.diceCount; i++){
    if(!state.held[i]){
      state.dice[i] = Math.floor(Math.random() * 6) + 1;
    }
  }

  state.rolls += 1;
  render();
}

function newAction(){
  state.rolls = 0;
  state.held = [false,false,false,false,false,false];
  render();
}

function changeDiceCount(delta){
  const next = Math.min(6, Math.max(1, state.diceCount + delta));
  if(next === state.diceCount) return;

  if(next < state.diceCount){
    for(let i = next; i < 6; i++) state.held[i] = false;
  }

  state.diceCount = next;
  state.rolls = 0;
  render();
}

function selectHero(heroId){
  if(!HEROES[heroId]) return;

  state.heroId = heroId;
  state.diceCount = HEROES[heroId].defaultDiceCount || 5;
  state.dice = [1,1,1,1,1,1];
  state.held = [false,false,false,false,false,false];
  state.rolls = 0;
  render();
}

function openEditor(index){
  editingIndex = index;
  faceChoices.innerHTML = "";

  getHero().faces.forEach(face => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "face-choice";
    btn.innerHTML = `
      <span class="face-value">${face.value}</span>
      <span class="face-symbol">${face.symbol}</span>
    `;

    btn.addEventListener("click", () => {
      state.dice[editingIndex] = face.value;
      saveState();
      render();
      editDialog.close();
    });

    faceChoices.appendChild(btn);
  });

  editDialog.showModal();
}

function fullReset(){
  const ok = confirm("Réinitialiser complètement l'application ?");
  if(!ok) return;

  localStorage.removeItem(STORAGE_KEY);
  state = {
    heroId: "generic",
    diceCount: HEROES.generic.defaultDiceCount || 5,
    dice: [1,1,1,1,1,1],
    held: [false,false,false,false,false,false],
    rolls: 0
  };
  render();
}

heroSelect.addEventListener("change", (e) => selectHero(e.target.value));
$("#minusDice").addEventListener("click", () => changeDiceCount(-1));
$("#plusDice").addEventListener("click", () => changeDiceCount(1));
rollBtn.addEventListener("click", rollDice);
$("#newActionBtn").addEventListener("click", newAction);
$("#resetAllBtn").addEventListener("click", fullReset);

buildHeroList();
loadState();
render();

if("serviceWorker" in navigator){
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch(console.warn);
  });
}
