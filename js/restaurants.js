//creation de la fonction
let restaurants = () => {

  //-------------------------------------voir la liste des restaurants
  // ------> Le but ici est d'affciher la liste des noms des restaurants qui "proposent" potentiellement les cocktails
  // ------> Petit problème qu'un seul nom s'affiche et c'est le dernier du fichier json associé...

  //lorsqu'on clique sur le bouton voir liste restos, voici ce qu'il se passe
  $.ajax({
    url: "./json/restaurants.json",
    method: "get",
    dataType: "json",
    success: function (data) {
      if (data.hasOwnProperty("resto")) {
        let restos = data["resto"];
        let divresto = $("#restaurant");
        let divcocktail = $("#cocktail");
        divcocktail.fadeOut();

        for (let resto of restos) {

          //$('.bouton_resto').click(function () {
            //$("body").empty();


            divresto.append($("<p />").text(resto.fields.nom_restaurant));

          //});

        }
        //saute une ligne
        $("body").append("<br />");
        //Retour à la liste des cocktails
        $("body").append(`<button onclick='window.location.reload(true)'>Retour à la liste des cocktails</button>`);

        //saute une ligne
        $("body").append("<br />");
        //saute une ligne
        $("body").append("<br />");
        //saute une ligne
        $("body").append("<br />");
        //saute une ligne
        $("body").append("<br />");
        //saute une ligne
        $("body").append("<br />");
        //saute une ligne
        $("body").append("<br />");

      }
    }
  });


}

//Export de la fonction pour l'utiliser dans le displaycocktails.js
export {restaurants}
