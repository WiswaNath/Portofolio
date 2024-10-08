
// Memanggil Feather Icons untuk mengganti elemen dengan ikon
feather.replace();

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Pastikan elemen ditemukan sebelum menambahkan event listener
if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
} else {
    console.error("Menu button or mobile menu not found");
}

document.addEventListener('DOMContentLoaded', () => {
    // Memanggil Feather Icons untuk mengganti elemen dengan ikon
    feather.replace();

    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-nav-links');

    // Menangani pembukaan dan penutupan menu
    menuBtn.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        // Tampilkan atau sembunyikan menu
        mobileMenu.classList.toggle('hidden', !isHidden);
        // Mengubah status ARIA untuk aksesibilitas
        menuBtn.setAttribute('aria-expanded', isHidden);
    });

    // Menutup menu saat salah satu tautan diklik
    const navLinks = document.querySelectorAll('#mobile-nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden'); // Menyembunyikan menu
            menuBtn.setAttribute('aria-expanded', 'false'); // Mengatur status ARIA saat menu ditutup
        });
    });
});

