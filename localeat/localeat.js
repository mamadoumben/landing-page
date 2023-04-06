const form = document.querySelector('myForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // récupérer les valeurs des champs du formulaire
    const nom = document.getElementById('Name').value;
    const email = document.getElementById('Email').value;
    const telephone = document.getElementById('Telephone').value;
    // validation des champs
    if (!nom || !email || !telephone || ) {
        alert('Veuillez remplir tous les champs du formulaire.');
        return;
    } else {
        alert('Merci pour votre demande. Nous vous contacterons sous peu !');
        form.submit()
    }

    // envoyer les données du formulaire au serveur
    // code ici pour envoyer les données au serveur

    // afficher le message de confirmation


    // réinitialiser le formulaire

});
form.reset();






