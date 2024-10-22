window.onload = function() {
  document.getElementById("splash-screen").style.opacity = 0;
  setTimeout(function() {
    document.getElementById("splash-screen").style.display = "none";
  }, 1000); 
};


const testi = [
  {
    name: "Andi Prasetyo",
    testimonial: "Layanan pembuatan website di Artevo sangat profesional. Desainnya modern dan sesuai kebutuhan bisnis saya.",
    date: "2024-09-15",
    image: "person1.jpg",
  },
  {
    name: "Budi Santoso",
    testimonial: "Artevo berhasil mengubah ide saya menjadi website yang fungsional dan estetis. Sangat puas dengan hasilnya!",
    date: "2024-09-16",
    image: "person2.jpg",
  },
  {
    name: "Cahyo Wibowo",
    testimonial: "Proyek UI/UX dengan Artevo berjalan sangat lancar. Timnya sangat memahami user experience yang saya inginkan.",
    date: "2024-09-17",
    image: "person3.jpg",
  },
  {
    name: "Dimas Pramono",
    testimonial: "Desain grafis yang dihasilkan oleh Artevo sangat kreatif dan sesuai dengan brand kami. Pasti akan kembali menggunakan jasa mereka!",
    date: "2024-09-18",
    image: "person4.jpg",
  },
  {
    name: "Eko Saputra",
    testimonial: "Artevo membantu saya membuat website bisnis yang responsif dan menarik. Timnya sangat profesional.",
    date: "2024-09-19",
    image: "person5.jpg",
  },
  {
    name: "Fajar Nugroho",
    testimonial: "Sangat puas dengan layanan desain UI/UX dari Artevo. Interface yang dibuat sangat user-friendly dan modern.",
    date: "2024-09-20",
    image: "person6.jpg",
  },
  {
    name: "Guntur Setiawan",
    testimonial: "Artevo mengerjakan desain grafis kami dengan cepat dan hasilnya luar biasa. Pasti akan menggunakan jasa mereka lagi.",
    date: "2024-09-21",
    image: "person7.jpg",
  },
  {
    name: "Hendra Kurniawan",
    testimonial: "Saya sangat merekomendasikan Artevo untuk pembuatan website. Layanan mereka sangat profesional dan tepat waktu.",
    date: "2024-09-22",
    image: "person8.jpg",
  },
  {
    name: "Irwan Maulana",
    testimonial: "Kolaborasi dengan Artevo dalam membuat website sangat memuaskan. Desainnya elegan dan fungsional.",
    date: "2024-09-23",
    image: "person9.jpg",
  },
  {
    name: "Joko Subiantoro",
    testimonial: "Artevo berhasil menciptakan website yang sesuai visi kami. Sangat mudah berkomunikasi dengan timnya.",
    date: "2024-09-24",
    image: "person10.jpg",
  },
];


const testiConts = document.getElementsByClassName("testi-container");

const testHTML = testi
  .map((data) => {
    return `
    <div class="swiper-slide ">
    <div class="testi-kartu">
                <img src="./assets/${data.image}" alt="${data.image}">
                <p>${data.name}</p>
                <p>"${data.testimonial}"</p>
                <p>${data.date}</p>
            </div>
              </div>`;
  })
  .join("");

// Accessing the first element in the collection
if (testiConts.length > 0) {
  testiConts[0].innerHTML = testHTML; // Make sure to use innerHTML (uppercase)
}

const nftData = [
  {
      name: "Joki Arceus",
      image: "./gege/joki.png",
      Tipe: "Website",
      status: "Finished"
  },
  {
      name: "Joki Coding Project",
      image: "./gege/jokic.png",
      Tipe: "Website",
      status: "Finished"
  },
  {
      name: "Ayam Geprek Cibaduyut",
      image: "./gege/gprk.png",
      Tipe: "Website",
      status: "Finished"
  },
  {
      name: "Just Chat Ai",
      image: "./gege/justai.png",
      Tipe: "Website",
      status: "Developed"
  },
  {
      name: "Nomz Store",
      image: "./gege/nomz.png",
      Tipe: "Website",
      status: "Finished"
  },
  {
      name: "Steak House",
      image: "./gege/stk.png",
      Tipe: "Ui / Ux",
      status: "On Going"
  },
  {
      name: "Industrie Website",
      image: "./gege/prs.png",
      Tipe: "Ui / Ux",
      status: "On Going"
  },
  {
      name: "Graphic Design #1",
      image: "./gege/gr1.png",
      Tipe: "Graphic Design",
      status: "Finished"
  },
  {
      name: "Graphic Design #2",
      image: "./gege/gr2.png",
      Tipe: "Graphic Design",
      status: "Finished"
  },
];

const nftConts = document.getElementsByClassName("kartu-container");

const nftHTML = nftData
  .map((data) => {
    return `
     <div data-aos-duration="800" data-aos="fade" class="kartu-porto">
                <div class="kartu-porto-hover">
                    <button class="btn btn-light">See Preview</button>
                </div>
                <img src="${data.image}" alt="${data.name}">
                <p class="p-0 m-0 pt-2 ps-3">${data.name}</p>
                <div class="kartu-porto-detail pt-3 ps-4 pe-4">
                    <div class="kartu-porto-detail-minting">
                        <p class="p-0 m-0 pb-2">Tipe</p>
                        <p>${data.Tipe}</p>
                    </div>
                    <div class="kartu-porto-detail-price">
                        <p class="p-0 m-0 pb-2">Status</p>
                        <p>${data.status}</p>
                    </div>
                </div>
            </div>`;
  })
  .join("");

// Accessing the first element in the collection
if (nftConts.length > 0) {
  nftConts[0].innerHTML = nftHTML; // Make sure to use innerHTML (uppercase)
}

const bannerData = [
  {
    gif : "joki.png",
    bg : "banner1.webp",
    nama : "Joki Arceus",
    desc : "Joki Arceus adalah proyek website untuk layanan joki game online, yang memudahkan pemain memesan joki dengan cepat dan aman. Fokus proyek ini adalah memberikan pengalaman pengguna yang mudah dengan fitur pemesanan praktis, real-time tracking, dan keamanan data yang kuat.",
    mtSTS : "View Demo",
    link : "#"
  },
  {
    gif : "gprk.png",
    bg : "bgparallax.png",
    nama : "Geprek Cibaduyut",
    desc : "Ayam Geprek Cibaduyut adalah proyek website UMKM yang bertujuan mendukung usaha kuliner lokal secara komersial. Website ini dirancang untuk memudahkan pelanggan dalam melihat menu, melakukan pemesanan online, dan menemukan informasi terkait promo serta lokasi.",
    mtSTS : "View Demo",
    link : "https://kepoo311.github.io/Web-Umkm-Geprek-Cibadayut/"
  },
  {
    gif : "justai.png",
    bg : "justaia.png",
    nama : "Just Chat Ai",
    desc : "Just Chat Ai adalah proyek website yang dirancang untuk menghadirkan layanan chatbot berbasis AI yang sederhana dan mudah digunakan. Proyek ini bertujuan menyediakan interaksi otomatis yang responsif, membantu pengguna dalam mendapatkan jawaban cepat untuk berbagai pertanyaan.",
    mtSTS : "View Demo",
    link : "https://just-chat-tan.vercel.app/"
  }
];

const bannerClass = document.getElementsByClassName('banner-wrapper');

const bannerHTML = bannerData
  .map((data) => {
    return `
      <div class="swiper-slide">
              <div class="banner-card" style="background:linear-gradient(0deg, rgba(0, 0, 0, 0.650), rgba(0, 0, 0, 0.650)), url('./gege/${data.bg}'); background-position: center; background-repeat: no-repeat; background-size: cover;">
                <div class="content">
                  <img class="nft-banner-img" src="./gege/${data.gif}" alt="${data.nama}" loading="lazy">
                  <div class="content-desc">
                    <p class="fs-5" style="color: rgba(255, 255, 255, 0.87);">Best Project</p>
                    <p class="fs-2 fw-bold">${data.nama}</p>
                    <p class="fs-6 nft-desc" style="color: rgba(255, 255, 255, 0.87);">${data.desc}</p>
                    <a href="${data.link}" target="_null" class="btn btn-light mt-3">${data.mtSTS}</a>
                  </div>
                </div>
              </div>
              <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </div>`;
  })
  .join("");

  if (bannerClass.length > 0) {
    bannerClass[0].innerHTML = bannerHTML; // Make sure to use innerHTML (uppercase)
  }

