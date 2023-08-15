document.addEventListener("DOMContentLoaded", function () {
    const alertContainer = document.getElementById("alert-container");
    const acceptBtn = document.getElementById("accept-btn");

    acceptBtn.addEventListener("click", function () {
        alertContainer.style.display = "none"; // Masquer la fenêtre d'alerte après avoir accepté
        // Ajoutez ici le code pour traiter l'acceptation des cookies
    });

    // Afficher la fenêtre d'alerte lorsque la page est chargée
    alertContainer.style.display = "flex";
});
