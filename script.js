// Cambia esta contraseña por una fecha, palabra o clave especial.
const PASSWORD = "amor";

// Mensajes aleatorios.
// Puedes agregar todos los mensajes que quieras.
const messages = [
  "Estoy orgulloso de ti ❤",
  "Te amo más de lo que imaginas.",
  "Aunque no esté cerca, siempre pienso en ti.",
  "Eres mi persona favorita.",
  "Respira, amor. Todo va a estar bien.",
  "Gracias por existir en mi vida.",
  "No olvides lo mucho que vales.",
  "Me haces muy feliz.",
  "Quisiera abrazarte justo ahora.",
  "Siempre voy a elegirte a ti."
];

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("errorMessage");

  if (input === PASSWORD) {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainContent").classList.remove("hidden");
  } else {
    error.textContent = "Contraseña incorrecta. Intenta de nuevo ❤";
  }
}

function showRandomMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  document.getElementById("randomMessage").textContent = messages[randomIndex];
}
