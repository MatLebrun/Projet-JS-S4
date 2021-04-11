import {addcocktail} from "./addcocktails.js";
import {restaurants} from "./restaurants.js";


//Création de la fonction
let dispcocktails = () =>{

  $.ajax({
    url: "./json/cocktails.json",
    method: "get",
    dataType: "json",
    success: function (data) {

      let divcocktail = $("#cocktail");

      //saute une ligne
      divcocktail.append("<br />");
      //saute une ligne
      divcocktail.append("<br />");

      if (data.hasOwnProperty("cocktails")) {
        let cocktails = data["cocktails"];

        //affiche le bouton qui permet de voir la liste des restaurants
        divcocktail.append(
          $('<button />').addClass('bouton_resto').click(restaurants).text('Liste des restaurants')
        );

        //saute une ligne
        divcocktail.append("<br />");
        //saute une ligne
        divcocktail.append("<br />");

        //affiche le bouton qui permet d'ajouter des cocktails
        divcocktail.append(
          `<button class="bouton_add">Ajouter un cocktail</button>`
        );
        //saute une ligne
        divcocktail.append("<br />");
        //saute une ligne
        divcocktail.append("<br />");

        for (let cocktail of cocktails) {

          //console.log(cocktail)

          //saute une ligne
          divcocktail.append("<br />");


          //-----Affichage des noms de chaque cocktail
          divcocktail.append(cocktail.name);

          //saute une ligne
          divcocktail.append("<br />");

          //affiche le bouton qui permet d'avoir les détails
          divcocktail.append(
            `<button class="bouton_details" data-nom="${cocktail.name}" data-image="${cocktail.image}" data-recette="${cocktail.preparation}">Afficher le détail</button>`
          );

          //saute une ligne
          divcocktail.append("<br />");
          //saute une ligne
          divcocktail.append("<br />");
        }

        /*-----------Cliquer pour avoir le détail du cocktail
        lorsqu'on clique sur le bouton détail, voici ce qu'il se passe */
        $('.bouton_details').click(function (){
          divcocktail.empty();
          let nom_cocktail = this.dataset.nom;
          let image_cocktail = this.dataset.image;
          let preparation_cocktail = this.dataset.recette;

          $("body").append(`<button onclick='window.location.reload(true)'>Retour à la liste des cocktails</button>`);
          //saute une ligne
          $("body").append("<br />");
          //saute une ligne
          $("body").append("<br />");
          //saute une ligne
          divcocktail.append("<br />");


          //affiche le nom du cocktail dont on veut le détail
          divcocktail.append(nom_cocktail);


          //-----Affichage des images de chaque cocktail
          //declare la balise img en html pour l'afficher
          let image = $(`<img class="image_cocktail" src="${image_cocktail}"/>`);

          //saute une ligne
          divcocktail.append("<br />");
          //saute une ligne
          divcocktail.append("<br />");

          //affiche l'image
          divcocktail.append(image);

          //saute une ligne
          divcocktail.append("<br />");
          //saute une ligne
          divcocktail.append("<br />");

          //Affiche la preparation
          divcocktail.append(preparation_cocktail);

          //saute une ligne
          divcocktail.append("<br />");
          //saute une ligne
          divcocktail.append("<br />");

        })

        //------------appel de la fonction addcocktail pour ajouter un cocktail
        addcocktail();
      }
    }
  });
}

//Export de la fonction pour l'utiliser dans le main.js
export {dispcocktails}
