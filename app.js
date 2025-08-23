// // Inisialisasi AOS
// AOS.init({
//     once: false,  // Set agar animasi bisa diputar ulang
//     duration: 1000,
//     easing: 'ease-in-out',
//     offset: 100,
// });

// const projects = [
//     { title: 'Project A', description: 'Deskripsi Project A.', image: '/src/img/sertifikasi/sertifikat1.jpg', tags: ['HTML', 'CSS', 'JavaScript'] },
//     { title: 'Project A', description: 'Deskripsi Project A.', image: '/src/img/sertifikasi/sertifikat5.jpg', tags: ['JavaScript', 'React'] },

// ]

// const certificates = [
//     { image: '/src/img/sertifikasi/sertifikat1.jpg' },
//     { image: '/src/img/sertifikasi/sertifikat2.jpg' },
//     { image: '/src/img/sertifikasi/sertifikat3.jpg' },
//     { image: '/src/img/sertifikasi/sertifikat4.jpg' },
//     { image: '/src/img/sertifikasi/sertifikatalibaba.jpg' },
//     { image: '/src/img/sertifikasi/sertifikat5.jpg' }
// ]

// const techStack = [
//     { logo: '/src/img/techStack/html.svg', name: 'HTML' },
//     { logo: '/src/img/techStack/css.svg', name: 'CSS' },
//     { logo: '/src/img/techStack/javascript.svg', name: 'JavaScript' },
//     { logo: '/src/img/techStack/reactjs.svg', name: 'ReactJS' },
//     { logo: '/src/img/techStack/tailwind.svg', name: 'Tailwind CSS' },
//     { logo: '/src/img/techStack/nodejs.svg', name: 'Node.js' },
//     { logo: '/src/img/techStack/mongo.svg', name: 'MongoDB' },
//     { logo: '/src/img/techStack/vercel.svg', name: 'Vercel' },
// ]

// function renderProjects() {
//     const projectsContainer = document.getElementById('projects');
//     projectsContainer.innerHTML = projects.map((project, index) => `
//                 <div class="tech-item text-center mx-4 py-4 px-4 border-2 border-gray-600 rounded-lg h-full bg-slate-400 transition duration-500 transform hover:scale-100 hover:shadow-lg hover:border-gray-400"
//                 data-aos="fade-up"
//                 data-aos-duration="1600""
//                      data-aos="fade-up" data-aos-delay="${index * 100}">
//                     <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover px-20">
//                     <div class="p-6">
//                         <h3 class="text-xl font-bold mb-2">${project.title}</h3>
//                         <p class="text-gray-400 mb-4">${project.description}</p>
//                         <div class="flex flex-wrap gap-2 mb-4">
//                             ${project.tags.map(tag => `<span class="px-3 py-1 bg-gray-700 rounded-full text-xs">${tag}</span>`).join('')}
//                         </div>
//                     </div>
//                 </div>
//             `).join('');
// }

// function renderCertificates() {
//     const certificatesContainer = document.getElementById('certificates');
//     certificatesContainer.innerHTML = certificates.map(cert => `
//                 <div class="mx-4 py-4 px-4 border-2 border-gray-600 rounded-lg h-full bg-slate-400 transition duration-500 transform hover:scale-100 hover:shadow-lg hover:border-gray-400 flex gap-4 ">
//                     <img src="${cert.image}" class="w-full h-48 object-cover px-20"></img>
//                 </div>
//             `).join('');
// }

// function renderTechStack() {
//     const techStackContainer = document.getElementById('tech-stack');
//     techStackContainer.innerHTML = `
//         <section id="Tech Stack" class="pb-32 bg-slate-800">
//             <div class="container mx-auto px-4">
//                 <div class="w-full px-4">
//                     <div class="mx-auto text-center justify-center mb-16" data-aos="fade-up">
//                         <h4 class="font-semibold text-lg text-primary mb-4">Tech Stack</h4>
//                         <h2 class="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">
//                             Teknologi Yang Saya Gunakan
//                         </h2>
//                     </div>
//                 </div>

//                 <div class="w-full px-4">
//                     <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
//                         ${techStack.map((tech, index) => `
//                             <div
//                                 class="tech-item text-center p-4 border-2 border-gray-600 rounded-lg bg-slate-400 transition duration-500 transform hover:scale-100 hover:shadow-lg hover:border-gray-400"
//                                 data-aos="fade-up"
//                                 data-aos-duration="${1000 + index * 200}">
//                                 <a href="#" class="block mx-auto py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100">
//                                     <img src="${tech.logo}" class="max-w-[80px] mx-auto transition duration-300 transform hover:scale-110">
//                                 </a>
//                                 <p class="font-bold text-dark mt-2">${tech.name}</p>
//                             </div>
//                         `).join('')}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     `;
// }






// document.querySelectorAll('.tab-button').forEach(button => {
//     button.addEventListener('click', () => {
//         document.querySelectorAll('.content-section').forEach(section => {
//             section.classList.add('hidden')
//         })
//         document.querySelector(`#${button.dataset.tab}`).classList.remove('hidden')
//         renderProjects()
//         renderCertificates()
//         renderTechStack()
//     })
// })

// renderProjects()