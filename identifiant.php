<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $pdo = new PDO("mysql:host=localhost;dbname=mksauto", "root", "");

    $stmt = $pdo->prepare("
        INSERT INTO reservations (nom_client, voiture, image_modele, date_reservation, duree, prix_total, email, telephone, statut_paiement, date_pdf, chemin_pdf)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), ?)
    ");

    $stmt->execute([
        $_POST['nom_client'],
        $_POST['voiture'],
        $_POST['image_modele'],
        $_POST['date_reservation'],
        $_POST['duree'],
        $_POST['prix_total'],
        $_POST['email'],
        $_POST['telephone'],
        $_POST['statut_paiement'],
        $_POST['chemin_pdf']
    ]);

    echo "Réservation enregistrée avec succès.";
}
?>