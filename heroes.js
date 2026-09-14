// Configuration des héros.
// Tu peux ajouter autant de héros que tu veux.
// defaultDiceCount = nombre de dés affichés par défaut pour ce héros.
// faces = contenu des faces 1 à 6.

window.HEROES = {
  generic: {
    name: "Dés génériques",
    defaultDiceCount: 5,
    info: "Version de test. On remplacera ensuite ces symboles par ceux de tes héros.",
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
  }
};
