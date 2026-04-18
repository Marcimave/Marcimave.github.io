// Initialiser EmailJS
emailjs.init("TON_PUBLIC_KEY");

document.getElementById("formulaire").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_t379mfh",     // ton Service ID (OK)
    "TON_TEMPLATE_ID",     // ⚠️ à remplacer
    this                   // formulaire
  )
  .then(function() {
    document.getElementById("confirmation").innerText =
      "Message envoyé avec succès ✅";
  }, function(error) {
    document.getElementById("confirmation").innerText =
      "Erreur lors de l’envoi ❌";
    console.log(error);
  });
});
