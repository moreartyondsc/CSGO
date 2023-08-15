document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("addButton");
  const closeButton = document.getElementById("closeButton");
  const modal = document.getElementById("boutiqueModal");
  const buttons = modal.querySelectorAll(".item-button");

  addButton.addEventListener("click", () => {
    modal.style.display = "block";
  });

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const amount = parseFloat(button.getAttribute("data-amount"));
      let totalAmount = 0; // Initialisez la variable pour stocker le montant total
      totalAmount += amount; // Ajoutez le montant du bouton cliqué
      updateUI(totalAmount); // Mettez à jour l'affichage du montant total
      modal.style.display = "none"; // Cacher la fenêtre modale
    });
  });

  closeButton.addEventListener("click", () => {
    modal.style.display = "none"; // Cacher la fenêtre modale
  });
});
