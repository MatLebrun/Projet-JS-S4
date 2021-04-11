//creation de la fonction
let addcocktail = () => {

  //-------------------------------------- ajouter un cocktail
  // ------> Le but ici est d'ajouter un cocktail en entrant ses informations et l'ajouter dans le fichier json

  //lorsqu'on clique sur le bouton ajouter cocktail, voici ce qu'il se passe
  $('.bouton_add').click(function (){
    $("body").empty();

    //Retourner à la liste des cocktails
    $("body").append(`<button onclick='window.location.reload(true)'>Retour à la liste des cocktails</button>`);

    //saute une ligne
    $("body").append("<br />");
    //saute une ligne
    $("body").append("<br />");

    //Entrée utilisateur du nom du cocktail
    $("body").append(`<input type="text" id="name_cocktail" placeholder="Nom du cocktail">`);

    //saute une ligne
    $("body").append("<br />");

    //Entrée utilisateur de la préparation du cocktail
    $("body").append(`<input type="text" id="preparation" placeholder="Préparation du cocktail">`);

    //saute une ligne
    $("body").append("<br />");

    //Entrée utilisateur de l'URL de l'image du cocktail
    $("body").append(`<input type="text" id="url_cocktail_img" placeholder="URL de l'image du cocktail">`);

    //saute une ligne
    $("body").append("<br />");

    //Ajoute le cocktail
    $("body").append(`<button onclick="window.alert('Le cocktail a bien été ajouté !')">Ajouter ce cocktail à la liste</button>`);


  })



}
//Export de la fonction pour l'utiliser dans le displaycocktails.js
export {addcocktail}
