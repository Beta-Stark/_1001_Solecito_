// ================================
// CONFIGURACION PERSONAL
// ================================

// Clave principal para entrar
const PASSWORD = "1001";

// Segunda clave para el mensaje secreto
const SECRET_PASSWORD = "solecito";

// Cartitas interactivas
const letters = {
  miss: {
    title: "Para cuando me extrañe",
    text: "Aun cuando no estoy cerca, recuerde que siempre tendrá mi apoyo, mi todo y sobre todo mi amor. Me hace muy feliz, mi tomatito. Usted significa muchísimo para mí y no quiero que olvide que aquí estoy, incluso cuando la distancia se atraviesa. 1001 ♡"
  },

  sad: {
    title: "Para cuando esté triste",
    text: "Mi amor, usted puede con todo. Recuerde todos esos enojos que saca a diario, esos que yo provoco, y diga: “si puedo con él, puedo con todo”. Usted es fuerte, hermosa y capaz de salir adelante incluso en los días difíciles. Yo creo en usted muchísimo. ♡"
  },

  proud: {
    title: "Para cuando necesite un segundo aire",
    text: "Usted recuerde siempre lo mucho que la ama su familia y lo mucho que la amo yo. Usted es demasiado importante, mi amor. No se rinda, no se apague y no olvide que tiene un corazón muy lindo. Estoy orgulloso de usted, mi solecito. ♡"
  },

  love: {
    title: "Para recordar cuánto la amo",
    text: "Le debo muchas noches de comidas en su casita, muchas risas, muchos abrazos y una vida juntos, mi amor jsjs. La amo por lo que es, por lo que provoca en mí y porque con usted todo se siente más bonito. ♡"
  }
};

// Razones aleatorias
const reasons = [
  "Porque amo la forma en la que me trata.",
  "Porque tiene una forma de ser demasiado linda.",
  "Porque es hermosa jsjsjs.",
  "Porque cocina rico jsjsj.",
  "Porque su sonrisa me encanta.",
  "Porque sus ojitos son demasiado lindos.",
  "Porque amo cómo me habla.",
  "Porque sus ojitos brillan cuando algo le gusta, ama o le apasiona.",
  "Porque tiene una forma de vestir que me encanta.",
  "Porque es incondicional conmigo, y esa es la razón que más provoca en mí."
];

// Mensajes del modo abrazo
const hugs = [
  "Abracito para mi mujerrrr. Venga aquí, mi amor, aunque sea desde esta página quiero que sienta que la abrazo fuerte. ♡",
  "Abracitoooo para mi princesaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa. No está sola, mi amor, aquí estoy para usted. ♡",
  "Abracitoooooooooo mi tomatitoooooooo jsjsjsj. Respire despacio, mi vida, todo va a estar bien. ♡"
];

// ================================
// FUNCIONES
// ================================

function checkPassword() {
  const input = document.getElementById("passwordInput").value.trim();
  const error = document.getElementById("errorMessage");

  if (input === PASSWORD) {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainContent").classList.remove("hidden");
  } else {
    error.textContent = "Contraseña incorrecta. Intente de nuevo ❤";
  }
}

function openLetter(type) {
  const selectedLetter = letters[type];

  document.getElementById("letterTitle").textContent = selectedLetter.title;
  document.getElementById("letterText").textContent = selectedLetter.text;
  document.getElementById("letterModal").classList.remove("hidden");
}

function closeLetter() {
  document.getElementById("letterModal").classList.add("hidden");
}

function showReason() {
  const randomIndex = Math.floor(Math.random() * reasons.length);
  const reasonText = document.getElementById("reasonText");

  reasonText.textContent = reasons[randomIndex];
  createHeartBurst();
}

function giveHug() {
  const randomIndex = Math.floor(Math.random() * hugs.length);
  const hugText = document.getElementById("hugText");

  hugText.textContent = hugs[randomIndex];
  createHeartBurst();
}

function unlockSecret() {
  const input = document.getElementById("secretInput").value.trim().toLowerCase();
  const message = document.getElementById("secretMessage");

  if (input === SECRET_PASSWORD) {
    message.textContent = "Este programa fue hecho para que, en los momentos en que no esté, usted recuerde cuánto la amo. Para que cada vez que me extrañe, aquí esté un pedacito de mí. Y sobre todo, para que mi princesa hermosa nunca olvide que quiero toda una vida a su lado, mi reina. Gracias por ser mi todo, mi reina, mi amor. ♡";
  } else {
    message.textContent = "Esa no es la clave, mi amor. Intente otra vez ♡";
  }
}

// Efecto de corazoncitos al presionar botones especiales
function createHeartBurst() {
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement("div");
    heart.textContent = "❤";
    heart.className = "burst-heart";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "80vh";
    heart.style.fontSize = Math.random() * 18 + 14 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1400);
  }
}

// Crear estilo del efecto de corazones desde JavaScript
const style = document.createElement("style");

style.textContent = `
  .burst-heart {
    position: fixed;
    color: rgba(201, 95, 122, 0.75);
    z-index: 50;
    pointer-events: none;
    animation: burstMove 1.4s ease-out forwards;
  }

  @keyframes burstMove {
    from {
      transform: translateY(0) scale(0.7);
      opacity: 1;
    }

    to {
      transform: translateY(-160px) scale(1.4);
      opacity: 0;
    }
  }
`;

document.head.appendChild(style);
