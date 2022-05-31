<?php
$nombre=$_POST['nombre'];
$email=$_POST['email'];
$mensaje=$_POST['mensaje'];
echo $nombre. " ha dicho:<br/>".$mensaje;
if(mail('wecode@gmail.com', $email, $mensaje)){
    echo "mail enviado";
}else{
    echo " ocurrio un error, intentelo nuevamente";
}
?>