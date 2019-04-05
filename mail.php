<?php

$recepient = "youmail@ya.ru";
$sitename = "Armata FG";

$name = trim($_GET["name"]);
$phone = trim($_GET["phone"]);
$hidden = trim($_GET["hidden"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nТелефон: $phone \nТекст: $hidden";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");