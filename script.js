// Définir le mot de passe ici
const PASSWORD = "admin123";

function checkPassword() {
  const input = document.getElementById("password").value;
  const error = document.getElementById("error-message");

  if (input === PASSWORD) {
    // Cacher l'écran de login
    document.getElementById("login-screen").style.display = "none";
    // Afficher l'intranet
    document.getElementById("intranet-content").classList.remove("hidden");
  } else {
    error.textContent = "Mot de passe incorrect.";
  }
}