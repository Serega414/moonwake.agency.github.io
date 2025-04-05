<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/PHPMailer.php';
    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/SMTP.php';

    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Charset = 'UTF-8';
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Host = 'smtp.eu';
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = ###;    
    $mail->Username = '@###########';                 // SMTP username
    $mail->Password = '###########';                           // SMTP password
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->isHTML(true);
  /*   $mail->SMTPDebug = 2;    */

    // От кого письмо
    $mail->setFrom('@#######', '#######');
    // кому отправить
    $mail->addAddress('@######'); 
    // Тема письма
    $mail->Subject = "Hi, Artem! A message for you!"; 


    // body letter

    $body = '<h1>New Order</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Name:</strong></p> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>E-mail:</strong></p> '.$_POST['email'].'</p>';
    }
    if(trim(!empty($_POST['message']))){
        $body.='<p><strong>Message:</strong></p> '.$_POST['message'].'</p>';
    }


    $mail->Body = $body;

    // Отправляем
    if (!$mail->send()) {
        $message = 'Oops!!! Try again';
    } else {
        $message = 'Success!';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);

?>