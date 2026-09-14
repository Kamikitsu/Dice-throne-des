// Configuration des héros.
// Tu peux ajouter autant de héros que tu veux.
// defaultDiceCount = nombre de dés affichés par défaut pour ce héros.
// faces = contenu des faces 1 à 6.

window.HEROES = {

  generic: {
    name: "Dés génériques",
    defaultDiceCount: 5,
    info: "Version de test.",
    faces: [
      { value: 1, symbol: "Symbole A" },
      { value: 2, symbol: "Symbole A" },
      { value: 3, symbol: "Symbole B" },
      { value: 4, symbol: "Symbole B" },
      { value: 5, symbol: "Symbole C" },
      { value: 6, symbol: "Symbole D" }
    ]
  },

  hero6: {
    name: "Héros à 6 dés (exemple)",
    defaultDiceCount: 6,
    info: "Exemple d'un personnage dont le nombre de dés par défaut est 6.",
    faces: [
      { value: 1, symbol: "Symbole A" },
      { value: 2, symbol: "Symbole A" },
      { value: 3, symbol: "Symbole B" },
      { value: 4, symbol: "Symbole B" },
      { value: 5, symbol: "Symbole C" },
      { value: 6, symbol: "Symbole D" }
    ]
  },

 spiderman: {
  name: "Spider-Man",
  defaultDiceCount: 5,
  info: "Spider-Man",
  faces: [
    { value: 1, image: "symbols/Spiderman 1.png" },
    { value: 2, image: "symbols/Spiderman 2.png" },
    { value: 3, image: "symbols/Spiderman 3.png" },
    { value: 4, image: "symbols/Spiderman 4.png" },
    { value: 5, image: "symbols/Spiderman 5.png" },
    { value: 6, image: "symbols/Spiderman 6.png" }
  ]
},

blackpanther: {
  name: "Black Panther",
  defaultDiceCount: 5,
  info: "Black Panther",
  faces: [
    { value: 1, image: "symbols/blackpanther-1.png" },
    { value: 2, image: "symbols/blackpanther-2.png" },
    { value: 3, image: "symbols/blackpanther-3.png" },
    { value: 4, image: "symbols/blackpanther-4.png" },
    { value: 5, image: "symbols/blackpanther-5.png" },
    { value: 6, image: "symbols/blackpanther-6.png" }
  ]
},

blackwidow: {
  name: "Black Widow",
  defaultDiceCount: 5,
  info: "Black Widow",
  faces: [
    { value: 1, image: "symbols/blackwidow-1.png" },
    { value: 2, image: "symbols/blackwidow-2.png" },
    { value: 3, image: "symbols/blackwidow-3.png" },
    { value: 4, image: "symbols/blackwidow-4.png" },
    { value: 5, image: "symbols/blackwidow-5.png" },
    { value: 6, image: "symbols/blackwidow-6.png" }
  ]
},

captainmarvel: {
  name: "Captain Marvel",
  defaultDiceCount: 5,
  info: "Captain Marvel",
  faces: [
    { value: 1, image: "symbols/captainmarvel-1.png" },
    { value: 2, image: "symbols/captainmarvel-2.png" },
    { value: 3, image: "symbols/captainmarvel-3.png" },
    { value: 4, image: "symbols/captainmarvel-4.png" },
    { value: 5, image: "symbols/captainmarvel-5.png" },
    { value: 6, image: "symbols/captainmarvel-6.png" }
  ]
},

doctorstrange: {
  name: "Doctor Strange",
  defaultDiceCount: 5,
  info: "Doctor Strange",
  faces: [
    { value: 1, image: "symbols/doctorstrange-1.png" },
    { value: 2, image: "symbols/doctorstrange-2.png" },
    { value: 3, image: "symbols/doctorstrange-3.png" },
    { value: 4, image: "symbols/doctorstrange-4.png" },
    { value: 5, image: "symbols/doctorstrange-5.png" },
    { value: 6, image: "symbols/doctorstrange-6.png" }
  ]
},

loki: {
  name: "Loki",
  defaultDiceCount: 5,
  info: "Loki",
  faces: [
    { value: 1, image: "symbols/loki-1.png" },
    { value: 2, image: "symbols/loki-2.png" },
    { value: 3, image: "symbols/loki-3.png" },
    { value: 4, image: "symbols/loki-4.png" },
    { value: 5, image: "symbols/loki-5.png" },
    { value: 6, image: "symbols/loki-6.png" }
  ]
},

scarletwitch: {
  name: "Scarlet Witch",
  defaultDiceCount: 5,
  info: "Scarlet Witch",
  faces: [
    { value: 1, image: "symbols/scarletwitch-1.png" },
    { value: 2, image: "symbols/scarletwitch-2.png" },
    { value: 3, image: "symbols/scarletwitch-3.png" },
    { value: 4, image: "symbols/scarletwitch-4.png" },
    { value: 5, image: "symbols/scarletwitch-5.png" },
    { value: 6, image: "symbols/scarletwitch-6.png" }
  ]
},

thor: {
  name: "Thor",
  defaultDiceCount: 5,
  info: "Thor",
  faces: [
    { value: 1, image: "symbols/thor-1.png" },
    { value: 2, image: "symbols/thor-2.png" },
    { value: 3, image: "symbols/thor-3.png" },
    { value: 4, image: "symbols/thor-4.png" },
    { value: 5, image: "symbols/thor-5.png" },
    { value: 6, image: "symbols/thor-6.png" }
  ]
},

cyclope: {
  name: "Cyclope",
  defaultDiceCount: 5,
  info: "Cyclope",
  faces: [
    { value: 1, image: "symbols/cyclope-1.png" },
    { value: 2, image: "symbols/cyclope-2.png" },
    { value: 3, image: "symbols/cyclope-3.png" },
    { value: 4, image: "symbols/cyclope-4.png" },
    { value: 5, image: "symbols/cyclope-5.png" },
    { value: 6, image: "symbols/cyclope-6.png" }
  ]
},

gambit: {
  name: "Gambit",
  defaultDiceCount: 5,
  info: "Gambit",
  faces: [
    { value: 1, image: "symbols/gambit-1.png" },
    { value: 2, image: "symbols/gambit-2.png" },
    { value: 3, image: "symbols/gambit-3.png" },
    { value: 4, image: "symbols/gambit-4.png" },
    { value: 5, image: "symbols/gambit-5.png" },
    { value: 6, image: "symbols/gambit-6.png" }
  ]
},

iceberg: {
  name: "Iceberg",
  defaultDiceCount: 5,
  info: "Iceberg",
  faces: [
    { value: 1, image: "symbols/iceberg-1.png" },
    { value: 2, image: "symbols/iceberg-2.png" },
    { value: 3, image: "symbols/iceberg-3.png" },
    { value: 4, image: "symbols/iceberg-4.png" },
    { value: 5, image: "symbols/iceberg-5.png" },
    { value: 6, image: "symbols/iceberg-6.png" }
  ]
},

jeangrey: {
  name: "Jean Grey",
  defaultDiceCount: 5,
  info: "Jean Grey",
  faces: [
    { value: 1, image: "symbols/jeangrey-1.png" },
    { value: 2, image: "symbols/jeangrey-2.png" },
    { value: 3, image: "symbols/jeangrey-3.png" },
    { value: 4, image: "symbols/jeangrey-4.png" },
    { value: 5, image: "symbols/jeangrey-5.png" },
    { value: 6, image: "symbols/jeangrey-6.png" }
  ]
},

psylocke: {
  name: "Psylocke",
  defaultDiceCount: 6,
  info: "Psylocke",
  faces: [
    { value: 1, image: "symbols/psylocke-1.png" },
    { value: 2, image: "symbols/psylocke-2.png" },
    { value: 3, image: "symbols/psylocke-3.png" },
    { value: 4, image: "symbols/psylocke-4.png" },
    { value: 5, image: "symbols/psylocke-5.png" },
    { value: 6, image: "symbols/psylocke-6.png" }
  ]
},

malicia: {
  name: "Malicia",
  defaultDiceCount: 5,
  info: "Malicia",
  faces: [
    { value: 1, image: "symbols/malicia-1.png" },
    { value: 2, image: "symbols/malicia-2.png" },
    { value: 3, image: "symbols/malicia-3.png" },
    { value: 4, image: "symbols/malicia-4.png" },
    { value: 5, image: "symbols/malicia-5.png" },
    { value: 6, image: "symbols/malicia-6.png" }
  ]
},

tornade: {
  name: "Tornade",
  defaultDiceCount: 5,
  info: "Tornade",
  faces: [
    { value: 1, image: "symbols/tornade-1.png" },
    { value: 2, image: "symbols/tornade-2.png" },
    { value: 3, image: "symbols/tornade-3.png" },
    { value: 4, image: "symbols/tornade-4.png" },
    { value: 5, image: "symbols/tornade-5.png" },
    { value: 6, image: "symbols/tornade-6.png" }
  ]
},

wolverine: {
  name: "Wolverine",
  defaultDiceCount: 5,
  info: "Wolverine",
  faces: [
    { value: 1, image: "symbols/wolverine-1.png" },
    { value: 2, image: "symbols/wolverine-2.png" },
    { value: 3, image: "symbols/wolverine-3.png" },
    { value: 4, image: "symbols/wolverine-4.png" },
    { value: 5, image: "symbols/wolverine-5.png" },
    { value: 6, image: "symbols/wolverine-6.png" }
  ]
},

};
