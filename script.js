document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("addButton");
  const closeButton = document.getElementById("closeButton");
  const boutiqueModal = document.getElementById("boutiqueModal");
  const gainXPButton = document.getElementById("gainXPButton");
  const generateItemButton = document.getElementById("generateItemButton");
  const generateItemButton2 = document.getElementById("generateItemButton2");
  const levelProgress = document.getElementById("levelProgress");
  const xpElement = document.getElementById("xp");
  const levelElement = document.getElementById("level");
  const randomItemElement = document.getElementById("randomItem");
  const randomItemPriceElement = document.getElementById("randomItemPrice");
  const randomItemElement2 = document.getElementById("randomItem2");
  const randomItemPriceElement2 = document.getElementById("randomItemPrice2");

    const items = {
    "MP5-SD | Acid Wash - Sortie d'usine": 2.91,
    "MP5-SD | Acid Wash - Usure minimale": 1.59,
    "MP5-SD | Acid Wash - Testé sur le terain": 0.60,
    "MP5-SD | Acid Wash - Bien usé": 1.49,
    "MP5-SD | Acid Wash - Sculpté par la bataille": 0.67,
    "Nova | Plume - Sortie d'usine": 3.45,
    "Nova | Plume - Usure minimale": 1.49,
    "Nova | Plume - Testé sur le terain": 0.73,
    "Nova | Plume - Bien usé": 1.02,
    "Nova | Plume - Sculpté par la bataille": 0.59,
    "G3SG1 | Black Sand - Sortie d'usine": 2.98,
    "G3SG1 | Black Sand - Usure minimale": 1.43,
    "G3SG1 | Black Sand - Testé sur le terain": 0.80,
    "G3SG1 | Black Sand - Bien usé": 1.15,
    "G3SG1 | Black Sand - Sculpté par la bataille": 0.63,
    "R8 Revolver | Memento - Sortie d'usine": 4.84,
    "R8 Revolver | Memento - Usure minimale": 1.43,
    "R8 Revolver | Memento - Testé sur le terain": 0.68,
    "R8 Revolver | Memento - Bien usé": 0.71,
    "R8 Revolver | Memento - Sculpté par la bataille": 0.66,
    "Dual Berettas | Balance - Sortie d'usine": 8.93,
    "Dual Berettas | Balance - Usure minimale": 1.64,
    "Dual Berettas | Balance - Testé sur le terain": 1.00,
    "Dual Berettas | Balance - Bien usé": 0.54,
    "Dual Berettas | Balance - Sculpté par la bataille": 0.73,
    // ... Ajoutez d'autres items avec leurs prix
  };

  const items2 = {
    "fszeeeeee - Sortie d'usine": 2.91,
    "fszeeeeee - Usure minimale": 1.59,
    "fszeeeeee - Testé sur le terain": 0.60,
    "fszeeeeee - Bien usé": 1.49,
    "fszeeeeee - Sculpté par la bataille": 0.67,
    "fszeeeeee - Sortie d'usine": 3.45,
    "fszeeeeee - Usure minimale": 1.49,
    "fszeeeeee - Testé sur le terain": 0.73,
    "fszeeeeee - Bien usé": 1.02,
    "fszeeeeee - Sculpté par la bataille": 0.59,
    "fszeeeeee - Sortie d'usine": 2.98,
    "fszeeeeee - Usure minimale": 1.43,
    "fszeeeeee - Testé sur le terain": 0.80,
    "fszeeeeee - Bien usé": 1.15,
    "fszeeeeee - Sculpté par la bataille": 0.63,
    "fszeeeeee - Sortie d'usine": 4.84,
    "fszeeeeee - Usure minimale": 1.43,
    "fszeeeeee - Testé sur le terain": 0.68,
    "fszeeeeee - Bien usé": 0.71,
    "fszeeeeee - Sculpté par la bataille": 0.66,
    "fszeeeeee - Sortie d'usine": 8.93,
    "fszeeeeee - Usure minimale": 1.64,
    "fszeeeeee - Testé sur le terain": 1.00,
    "fszeeeeee - Bien usé": 0.54,
    "fszeeeeee - Sculpté par la bataille": 0.73,
    // ... Ajoutez d'autres items avec leurs prix
  };

  let xp = 0;
  let level = 0;
  const baseXP = 10;
  const exponent = 2;
  let $ = 100;

  addButton.addEventListener("click", () => {
    boutiqueModal.style.display = "block";
  });

  closeButton.addEventListener("click", () => {
    boutiqueModal.style.display = "none";
  });

  function updateUI() {
    xpElement.textContent = xp;
    levelElement.textContent = `${level} | $${$.toFixed(2)}`;

    const xpNeeded = calculateXPNeeded(level);
    const xpProgress = (xp / xpNeeded) * 100;

    levelProgress.value = Number.isFinite(xpProgress) ? xpProgress : 0;
  }

  function generateRandomItem(items) {
    const itemKeys = Object.keys(items);
    const randomIndex = Math.floor(Math.random() * itemKeys.length);
    const randomItem = itemKeys[randomIndex];
    const randomItemPrice = items[randomItem];
    return { randomItem, randomItemPrice };
  }

  function handleGenerateItemButtonClick(items, randomItemElement, randomItemPriceElement) {
    if ($) {
      const { randomItem, randomItemPrice } = generateRandomItem(items);

      $ -= 2.34;
      $ += randomItemPrice;

      randomItemPriceElement.textContent = `${randomItemPrice.toFixed(2)}$`;
      randomItemElement.style.display = "block";
      gainXP();
      updateUI();
    } else {
      alert("Vous n'avez pas assez d'argent.");
    }
  }

  generateItemButton.addEventListener("click", () => {
    handleGenerateItemButtonClick(items, randomItemElement, randomItemPriceElement);
  });

  generateItemButton2.addEventListener("click", () => {
    handleGenerateItemButtonClick(items2, randomItemElement2, randomItemPriceElement2);
  });

  function levelUp() {
    level++;
    xp = 0;
    updateUI();
  }

  function calculateXPNeeded(level) {
    return baseXP * Math.pow(level, exponent);
  }

  function gainXP() {
    xp++;
    const xpNeeded = calculateXPNeeded(level);
    if (xp >= xpNeeded) {
      levelUp();
    } else {
      updateUI();
    }
  }

  gainXPButton.addEventListener("click", gainXP);
  updateUI();
});