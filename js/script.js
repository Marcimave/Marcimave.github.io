// Initialisation EmailJS
emailjs.init("TON_PUBLIC_KEY");

document.getElementById("formulaire").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_t379mfh",
    "template_kwa4moh", // 👈 TON TEMPLATE
    this
  )
  .then(function() {
    document.getElementById("confirmation").innerText =
      "Message envoyé avec succès ✅";
  })
  .catch(function(error) {
    document.getElementById("confirmation").innerText =
      "Erreur lors de l’envoi ❌";
    console.log(error);
  });
});
