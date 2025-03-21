// Menunggu hingga DOM sepenuhnya dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Ambil tombol
    const glowButton = document.getElementById('glow-button');

    // Tambahkan event listener untuk efek interaksi saat diklik
    glowButton.addEventListener('click', function() {
        alert('Terima kasih telah menghubungi kami!'); // Tampilkan alert saat tombol diklik
    });

    // Tambahkan efek glow pada tombol saat mouse hover
    glowButton.addEventListener('mouseover', function() {
        glowButton.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.5)'; // Efek glow saat hover
    });

    glowButton.addEventListener('mouseout', function() {
        glowButton.style.boxShadow = 'none'; // Menghilangkan efek glow setelah tidak hover
    });
});