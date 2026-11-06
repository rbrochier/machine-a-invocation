const formulaire = document.getElementById("invocation");
const prenom = document.getElementById("prenom");
const creature = document.getElementById("creature");
const resultat = document.getElementById("resultat");
const message = document.getElementById("message");

/* rappel événements / DOM */

formulaire.addEventListener("submit", (event) => {
  event.preventDefault();
  message.textContent = `${prenom.value}, ${creature.value} a entendu ton appel et te suivra tout le bloc 1 !`;
  formulaire.classList.add("cache");
  resultat.classList.remove("cache");
});


