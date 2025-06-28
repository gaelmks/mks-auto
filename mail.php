<?php
$data = json_decode(file_get_contents("php://input"), true);
$to = $data['to'];
$pdfData = $data['pdfData'];

list($type, $pdfBase64) = explode(',', $pdfData);
$decodedPdf = base64_decode($pdfBase64);

// Crée une pièce jointe temporaire
$file = tempnam(sys_get_temp_dir(), 'pdf');
file_put_contents($file, $decodedPdf);

// Envoie le mail
$subject = "Votre réservation chez MKS Auto";
$message = "Veuillez trouver ci-joint votre confirmation de réservation.";
$headers = "From: gaelmukassa@icloud.com\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"boundary\"\r\n";

$attachment = chunk_split(base64_encode($decodedPdf));

$body = "--boundary\r\n";
$body .= "Content-Type: text/plain\r\n\r\n";
$body .= $message . "\r\n";
$body .= "--boundary\r\n";
$body .= "Content-Type: application/pdf; name=\"reservation.pdf\"\r\n";
$body .= "Content-Transfer-Encoding: base64\r\n";
$body .= "Content-Disposition: attachment; filename=\"reservation.pdf\"\r\n\r\n";
$body .= $attachment . "\r\n";
$body .= "--boundary--";

mail($to, $subject, $body, $headers);
?>
