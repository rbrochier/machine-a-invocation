
const formulaire = document.getElementById("invocation")
const prenom = document.getElementById("prenom")
const creature = document.getElementById("creature")
const resultat = document.getElementById("resultat")
const message = document.getElementById("message")



formulaire.addEventListener('submit', (event) => {

  // 1re ligne : empêcher le rechargement
  event.preventDefault();
  // 2e ligne : le console.log
  console.log(prenom.value, creature.value);
});
