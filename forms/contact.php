<?php
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $to = "giovany.franco.gf@gmail.com";
    $headers = "From: " . $email;

    mail($to, $subject, $message, $headers);

    echo "El correo electrónico ha sido enviado.";
}
?>
