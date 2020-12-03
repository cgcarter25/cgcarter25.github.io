<?php

if (isset($_POST['submit'])) {
  $name= $_POST['name'];
  $email= $_POST['email'];
  $subject= $_POST['subject'];
  $message= $_POST['message'];

  $mailTo = "cgcarter25@gmail.com";
  $headers = "From: " .$email;
  $txt = "New form submission from " .$name.".\n\n".$message;

  mail($mailTo $subject, $txt, $headers);
  header("Location: index.html?mailsend")
}

?>
