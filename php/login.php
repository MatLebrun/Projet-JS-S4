<?php
session_start();

$obj = new stdClass();
$obj->result = true;

if (isset($_POST["username"], $_POST["password"])) {
  $username = $_POST["username"];
  $password = $_POST["password"];

  /* TODO: check if user + password exists in database */
  /* !! this is a sample! modify to your needs */
  if ($username == "bonne" && $password == "note") {
    $obj->message = "Welcome!";
    $_SESSION["user_id"] = 1;
  } else {
    $obj->result = false;
    $obj->message = "Nom d'utilisateur ou mot de passe incorrect !";
  }
} else {
  $obj->result = false;
  $obj->message = "Un nom d'utilisateur et un mot de passe sont obligatoires !";
}

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

echo json_encode($obj);
