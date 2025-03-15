const successMessage = document.querySelector(".text-green-500");

if (successMessage) {
    console.log(successMessage.textContent)
    if (successMessage.textContent === "Connexion réussie !") {
        successMessage.textContent = "";
    }
}
