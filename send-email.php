<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  $to = "info@sundanceradio.ca"; // CHANGE IF NEEDED
  $subject = "New Contact Form Submission";

  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $phone = htmlspecialchars($_POST['phone']);
  $topic = htmlspecialchars($_POST['subject']);
  $message = htmlspecialchars($_POST['message']);

  $body = "
Name: $name
Email: $email
Phone: $phone
Subject: $topic

Message:
$message
";

  $headers = "From: $email\r\nReply-To: $email";

  if (mail($to, $subject, $body, $headers)) {
    header("Location: contact.html?success=true");
  } else {
    header("Location: contact.html?error=true");
  }
}
?>
