function ajouterAuPanier(nom, image) {
    const voitures = JSON.parse(localStorage.getItem("voituresReservees")) || [];

    voitures.push({ nom, image });
    localStorage.setItem("voituresReservees", JSON.stringify(voitures));

    window.location.href = "reservation.html";
}
