const quotes = [
    "“Kamu tidak akan pernah terlambat untuk mengejar impian baru atau menetapkan tujuan yang lebih tinggi. Selalu ada kesempatan untuk tumbuh dan berkembang.”",
    "“Kesuksesan bukanlah akhir dari perjalanan, dan kegagalan bukanlah titik akhir. Yang terpenting adalah keberanian untuk terus melangkah maju.”",
    "“Kekuatanmu jauh melampaui apa yang kamu bayangkan. Percayalah pada dirimu sendiri dan teruslah berjuang.”",
    "“Untuk meraih sesuatu yang belum pernah kamu capai, kamu harus siap melakukan hal-hal yang belum pernah kamu coba sebelumnya. Hanya dengan begitu kamu akan menemukan batasan baru.”"
];

const puisi = [
    "“Di tengah malam yang tenang, bintang-bintang bersinar terang,<br>Kehidupan kita seperti langit malam, penuh dengan cahaya dan harapan.<br>Tak peduli seberapa gelap jalanmu, ingatlah selalu ada cahaya di ujung sana.”",
    "“Saat badai mengguncang lautan, dan angin menghempas keras,<br>Jangan biarkan semangatmu pudar, teruslah berjuang tanpa lelah.<br>Karena setiap gelombang yang kamu atasi, semakin mendekatkanmu pada pelabuhan damai.”",
    "“Setiap hari adalah peluang baru,<br>Untuk menulis kisah yang lebih indah,<br>Jangan biarkan kemarin membelenggu,<br>Karena masa depan penuh dengan harapan yang membara.”",
    "“Di setiap langkah yang kita ambil,<br>Ada kekuatan yang tak terlihat,<br>Jangan ragu untuk melangkah lebih jauh,<br>Karena di ujung jalan ada kebahagiaan yang menanti.”",
    "“Walau jalannya terasa terjal,<br>Jangan pernah menyerah pada mimpi,<br>Setiap tantangan yang kita hadapi,<br>Akan membawa kita lebih dekat pada kemenangan sejati.”"
];


function changeQuote() {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
}

function changePoetry() {
    const puisiElement = document.getElementById('puisi');
    puisiElement.innerHTML = puisi[Math.floor(Math.random() * puisi.length)];
}

function playMusic() {
    const music = document.getElementById('background-music');
    music.play();
}
