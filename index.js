// // AOS animations
// AOS.init({
//     once: false,  // Set agar animasi bisa diputar ulang
//     duration: 1000,
//     easing: 'ease-in-out',
//     offset: 100,
// });


// // SHAPE animations
// window.addEventListener('scroll', () => {
//     const shapes = document.querySelectorAll('.shape');
//     const scrollY = window.scrollY;

//     shapes.forEach((shape, index) => {
//         const speed = (index + 1) * 0.5; // Kecepatan tiap shape
//         const translateY = scrollY * speed;
//         shape.style.transform = `translateY(${translateY}px)`;
//     });
// });

// // NAVBAR Fix
// window.onscroll = function () {
//     const header = document.querySelector('header')
//     const fixedNav = header.offsetTop

//     if (window.pageYOffset > fixedNav) {
//         header.classList.add('navbar-fixed')
//     } else {
//         header.classList.remove('navbar-fixed')
//     }
// }

// // TOGGLE HAMBURGER
// const hamburger = document.querySelector('#hamburger');
// const navMenu = document.querySelector('#nav-menu');

// // Function untuk memastikan nav ilang di mode desktop
// function checkNavbarVisibility() {
//     if (window.innerWidth >= 1024) { // Untuk layar
//         navMenu.classList.remove('hidden'); // Pastikan navbar keliatan
//         hamburger.classList.remove('hamburger-active'); // Reset hamburger
//     } else { // Untuk layar mobile
//         navMenu.classList.add('hidden'); // Keep navbar hidden initially
//     }
// }

// // Initial check on page load
// checkNavbarVisibility();

// // Toggle navbar visibility only on mobile
// hamburger.addEventListener('click', function () {
//     hamburger.classList.toggle('hamburger-active');
//     navMenu.classList.toggle('hidden');
// });

// // Ensure navbar remains visible on desktop (when window is resized)
// window.addEventListener('resize', checkNavbarVisibility);



// // TOGGLE SHOWMORE IMG
// // Mengambil elemen tombol dan sertifikat tersembunyi
// const showMore = document.getElementById('show-more-btn');
// const hiddenCertificates = document.querySelectorAll('#certificates-container .hidden');

// // Menambahkan event listener pada tombol Show More
// showMore.addEventListener('click', () => {
//     const isHidden = hiddenCertificates[0].classList.contains('hidden'); // Cek apakah sertifikat masih tersembunyi

//     if (isHidden) {
//         // Menampilkan sertifikat dengan menghapus kelas 'hidden'
//         hiddenCertificates.forEach((certificate) => {
//             certificate.classList.remove('hidden');
//             // Menghapus dan menambahkan ulang atribut data-aos untuk reset animasi
//             certificate.removeAttribute('data-aos');
//             certificate.setAttribute('data-aos', 'zoom-in');
//         });
//         showMore.innerText = 'Show Less';  // Ubah teks tombol
//     } else {
//         // Menyembunyikan sertifikat kembali
//         hiddenCertificates.forEach((certificate) => {
//             certificate.classList.add('hidden');
//         });
//         showMore.innerText = 'Show More';  // Ubah teks tombol
//     }

//     // Refresh AOS untuk menerapkan animasi baru
//     AOS.refresh();
// });





