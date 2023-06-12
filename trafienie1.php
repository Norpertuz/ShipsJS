<?php
$myfile = fopen("odpowiedz1.txt", "w") or die("Unable to open file!");
$txt = $_GET['width'];
fwrite($myfile, $txt);
fclose($myfile);
echo "<script type='text/javascript'>window.close();</script>";
?>