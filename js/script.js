/*alert("Déterminé à sortir de la précarité");*/
function choisirOffre(nom, prix) {
  alert("Vous avez choisi : " + nom + " - " + prix + "€");

  document.querySelectorAll(".carte").forEach(c => c.classList.remove("active"));

  event.target.closest(".carte").classList.add("active");
}
