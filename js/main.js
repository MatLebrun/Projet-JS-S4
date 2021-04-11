import {buildLoginForm, buildLogoutForm} from "./login_logout.js";
import {dispcocktails} from "./displaycocktails.js";


const URL_IS_CONNECTED = "php/is_connected.php";

$(() => {
  $.ajax({
    url: URL_IS_CONNECTED,
    method: "get",
    dataType: "json"
  })
    .done(function (data) {
      if (data.hasOwnProperty("result")) {
        if (data.result) {
          if (data.hasOwnProperty("is_connected")) {
            let $login_logout = $("#login-logout");
            if (data.is_connected) {
              /* display logout form */
              $login_logout.append(buildLogoutForm());

              //Appel de la fonction
              dispcocktails();


            } else {
              /* display login form */
              $login_logout.append(buildLoginForm());
            }
            $login_logout.fadeIn();
          } else {

          }
        } else {

        }
      } else {

      }
    })
    .fail(function () {

    })

});
