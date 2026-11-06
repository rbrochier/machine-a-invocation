
const formulaire = document.getElementById("invocation")
const prenom = document.getElementById("prenom")
const creature = document.getElementById("creature")
const resultat = document.getElementById("resultat")
const message = document.getElementById("message")



formulaire.addEventListener('submit', (event) => {

  event.preventDefault();
  console.log(prenom.value, creature.value);
});
