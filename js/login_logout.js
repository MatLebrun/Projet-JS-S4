//const URL_LOGIN = "http://localhost/Projet-JS-S4/php/login.php";
//const URL_LOGOUT = "http://localhost/Projet-JS-S4/php/logout.php";

const URL_LOGIN = "/php/login.php";
const URL_LOGOUT = "/php/logout.php";


//Création des fonctions
let ajaxLogin = ($self) => {
  let $data = $self.serialize()
  $self.hide();
  $("#message").hide();
  $.ajax({
    url: $self.attr("action"),
    method: $self.attr("method"),
    data: $data,
    dataType:"json",
  })
    .done(function (data) {
      if (data.hasOwnProperty("result")) {
        if(data.result) {
          window.location.reload(true);
        } else {
          $self.fadeIn(2000);
          if (data.hasOwnProperty("message")) {
            $("#message").html(data.message).fadeIn(1000);
          }
          $self.fadeIn(2000);
        }
      }
    })
    .fail(function () {})
};
let ajaxLogout = () => {
  $.ajax({
    url: URL_LOGOUT,
    method: "get",
    dataType: "json",
  })
    .done (() => window.location.reload(true))
    .fail(function () {})
};
let buildLoginForm = () => {
  return ($("<form />")
      .attr("action", URL_LOGIN)
      .attr("method", "post")
      .append(
        $("<input placeholder='Nom Utilisateur'/>")
          .attr("type", "text")
          .attr("name", "username"),
        $("<input placeholder='Mot de Passe'/>")
          .attr("type", "password")
          .attr("name", "password"),
        $("<button/>")
          .attr("type", "submit")
          .append("Se connecter !"),
      )
      .submit(function () {
        ajaxLogin($(this));
        return false;
      })
  );
}
let buildLogoutForm = () => {
  return ($("<button />"))
    .append("Se déconnecter")
    .click(ajaxLogout);
}

//Export des fonctions pour les utiliser dans le main.js
export {buildLoginForm, buildLogoutForm}


