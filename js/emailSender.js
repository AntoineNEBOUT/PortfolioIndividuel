function() {
    emailjs.init("YOUR_USER_ID"); // Remplacez par votre ID utilisateur EmailJS
};

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Récupérer les données du formulaire
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Envoyer les données via EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message envoyé avec succès!');
    }, function(error) {
        console.log('FAILED...', error);
        alert('Échec de l\'envoi du message.');
    });
});
