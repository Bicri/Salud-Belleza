<?php
include("../Mailer/src/PHPMailer.php");
include("../Mailer/src/SMTP.php");
include("../Mailer/src/Exception.php");

        $nombre = $_POST['nombretxt'];
        $destinatario = $_POST["emailtxt"];
        $numero = $_POST["telefonotxt"];
        $cuerpo = $_POST["mensajetxt"];
        $asunto = "Contactanos";

        $body = '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"></head><body>'.'<strong>Hola, mi nombre es '.$nombre.'</strong> <br><br>'.$cuerpo.'<br><br> <i>Atte. '.$nombre.'<br>'.'Numero: '.$numero.'</i>'.'</body></html>';
        

        $remitente = "";                             //Escribir aqui el correo de donde se enviarán
        $nombre = "BH Salud y Belleza";                    //Nombre del remitente
        $host = "smtp.gmail.com";                       //Servidor SMPT a utilizar (coincidir con dominio de remitente)
        $port = "587";                                  //o 465
        $SMTPAuth = "login";
        $_SMTPSecure = "tls";                           //o ssl, pero debe incluir SMTPOptions
        $contrasena = "";                               //Escribir contraseña del correo remitente


        try{
            $mail = new PHPMailer\PHPMailer\PHPMailer();    //Instancia de librerias

            $mail->isSMTP();                                //Indicar que use SMTP

            $mail->SMTPDebug = 0;               //en 1 muestra flujo de procesos | 0 en producción
            $mail->Host = $host;                //Servidor SMTP
            $mail->Port = $port;
            $mail->SMTPAuth = $SMTPAuth;        //Para enviar debe iniciar sesión
            $mail->SMTPSecure = $_SMTPSecure;   //Seguridad

            $mail->Username = $remitente;
            $mail->Password = $contrasena;

            $mail->setFrom($remitente, $nombre);    //Enviar desde, (dirección y nombre del remitente)
            $mail->addAddress($destinatario);       //Enviar hacia...

            $mail->isHTML(true);                    //Envía un HTML en el correo
            $mail->Subject=$asunto;

            $mail->Body = $body;

            if($mail->send()) {
                //echo "Correo enviado con éxito"
                echo json_encode("Correo enviado con éxito");
            }
        }catch(Exception $e){
            //error_log("Mailer:no se pudo enviar el correo ");
            echo json_encode("Mailer:no se pudo enviar el correo ".$e);
        }
    
?>