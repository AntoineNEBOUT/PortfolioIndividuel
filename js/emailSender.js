function sendMail() {
    /*
        Fonction qui envoie un mail à partir des informations saisies dans le formulaire de contact
    */
    
    event.preventDefault();
        /* Envoi du mail en utilisant le service EmailJS lié à mon adresse mail, le template défini sur le site d'EmailJS et en récupérant les informations du formulaire de contact */

        emailjs.sendForm('service_pplij5s', 'template_6ge5z9l', '#contact_form')
            .then(() => {
                alert('Le message a été correctement envoyé.'); // Affichage d'une fenêtre sur la page pour informer de la réussite de l'envoi
            }, (error) => {
                /* Affichage d'une fenêtre sur la page pour informer de l'échec de l'envoi */
                alert('L\'envoie du message a échoué. Veuillez nous excusez, pouvez prendre contact via l\'adresse mail disponible en dessous du formulaire de contact.');
                
                console.log('FAILED :', error);
            });
}