window.onload = function() {
  document.getElementById("splash-screen").style.opacity = 0;
  setTimeout(function() {
    document.getElementById("splash-screen").style.display = "none";
  }, 1000); 
};


const testi = [
  {
    name: "Andi Prasetyo",
    testimonial: "Membeli NFT di Artevo Labs adalah pengalaman yang luar biasa! Prosesnya mudah dan cepat.",
    date: "2024-09-15",
    image: "person1.jpg",
  },
  {
    name: "Budi Santoso",
    testimonial: "Saya sangat puas dengan koleksi NFT yang ditawarkan. Kualitasnya sangat baik!",
    date: "2024-09-16",
    image: "person2.jpg",
  },
  {
    name: "Cahyo Wibowo",
    testimonial: "Artevo Labs memiliki berbagai pilihan NFT yang menarik. Saya akan kembali untuk membeli lagi.",
    date: "2024-09-17",
    image: "person3.jpg",
  },
  {
    name: "Dimas Pramono",
    testimonial: "Pengalaman berbelanja NFT di sini sangat menyenangkan. Layanan pelanggannya juga responsif.",
    date: "2024-09-18",
    image: "person4.jpg",
  },
  {
    name: "Eko Saputra",
    testimonial: "Saya menemukan NFT yang sempurna untuk koleksi saya di Artevo Labs. Sangat direkomendasikan!",
    date: "2024-09-19",
    image: "person5.jpg",
  },
  {
    name: "Fajar Nugroho",
    testimonial: "Beli NFT di Artevo Labs membuat saya lebih menghargai seni digital. Prosesnya sangat mudah!",
    date: "2024-09-20",
    image: "person6.jpg",
  },
  {
    name: "Guntur Setiawan",
    testimonial: "Artevo Labs adalah tempat terbaik untuk menemukan NFT berkualitas. Saya sangat senang!",
    date: "2024-09-21",
    image: "person7.jpg",
  },
  {
    name: "Hendra Kurniawan",
    testimonial: "Layanan yang cepat dan produk yang luar biasa! Saya pasti akan kembali untuk membeli lebih banyak.",
    date: "2024-09-22",
    image: "person8.jpg",
  },
  {
    name: "Irwan Maulana",
    testimonial: "Saya sangat terkesan dengan pilihan NFT di Artevo Labs. Sangat memuaskan!",
    date: "2024-09-23",
    image: "person9.jpg",
  },
  {
    name: "Joko Subiantoro",
    testimonial: "Membeli NFT di sini sangat mudah dan aman. Saya sangat merekomendasikannya!",
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
      name: "BoredPepe #1",
      image: "./nft/pepe1.avif",
      mintingStatus: "Now",
      price: 5.5
  },
  {
      name: "BoredPepe #2",
      image: "./nft/pepe2.avif",
      mintingStatus: "Closed",
      price: 7.0
  },
  {
      name: "MemeFwends #1",
      image: "./nft/meme1.avif",
      mintingStatus: "Now",
      price: 10.0
  },
  {
      name: "MemeFwends #2",
      image: "./nft/meme2.avif",
      mintingStatus: "Pending",
      price: 12.5
  },
  {
      name: "Timeless Characters #1",
      image: "./nft/anim1.avif",
      mintingStatus: "Now",
      price: 8.2
  },
  {
      name: "Timeless Characters #2",
      image: "./nft/anim2.avif",
      mintingStatus: "Closed",
      price: 9.3
  },
  {
      name: "BoredPepe #3",
      image: "./nft/pepe3.avif",
      mintingStatus: "Now",
      price: 3.8
  },
  {
      name: "BoredPepe #4",
      image: "./nft/pepe4.avif",
      mintingStatus: "Closed",
      price: 4.2
  },
  {
      name: "MemeFwends #3",
      image: "./nft/meme3.avif",
      mintingStatus: "Now",
      price: 2.7
  },
  {
      name: "MemeFwends #4",
      image: "./nft/meme4.avif",
      mintingStatus: "Pending",
      price: 3.1
  },
  {
      name: "Timeless Characters #3",
      image: "./nft/anim3.avif",
      mintingStatus: "Now",
      price: 6.0
  },
  {
      name: "Timeless Characters #4",
      image: "./nft/anim4.avif",
      mintingStatus: "Closed",
      price: 6.5
  },
  {
      name: "Timeless Characters #5",
      image: "./nft/anim5.avif",
      mintingStatus: "Now",
      price: 7.8
  }
];

const nftConts = document.getElementsByClassName("kartu-container");

const nftHTML = nftData
  .map((data) => {
    return `
     <div data-aos-duration="800" data-aos="fade" class="kartu-porto">
                <div class="kartu-porto-hover">
                    <button class="btn btn-light">Mint Now</button>
                </div>
                <img src="${data.image}" alt="${data.name}">
                <p class="p-0 m-0 pt-2 ps-3">${data.name}</p>
                <div class="kartu-porto-detail pt-3 ps-4 pe-4">
                    <div class="kartu-porto-detail-minting">
                        <p class="p-0 m-0 pb-2">Minting</p>
                        <p>${data.mintingStatus}</p>
                    </div>
                    <div class="kartu-porto-detail-price">
                        <p class="p-0 m-0 pb-2">Price</p>
                        <p>${data.price} ETH</p>
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
    gif : "pepe.gif",
    bg : "pepeBanner.png",
    nama : "Bored Pepe",
    desc : "Bored Pepe NFT is a digital art collection featuring Pepe the Frog, depicted with a bored and apathetic expression, inspired by the meme culture. It blends iconic meme imagery with NFT technology, offering collectors unique, limited-edition art pieces.",
    mtSTS : "Minting Now"
  },
  {
    gif : "memefw.gif",
    bg : "memeFWbg.png",
    nama : "MemeFwends",
    desc : "MemeFwends is a playful NFT collection that brings internet culture to life, transforming beloved memes into unique, collectible characters. Each MemeFwend has its own quirky personality and traits, making it a must-have for meme lovers and NFT enthusiasts alike. Join the fun and own a piece of meme history!",
    mtSTS : "Minting Now"
  },
  {
    gif : "tmCHR.gif",
    bg : "tmCHRbg.png",
    nama : "Timeless Character",
    desc : "Timeless Character NFT features iconic, hand-drawn characters that transcend time, capturing the essence of creativity and storytelling. With rich backstories and distinct visual appeal, each character is a unique work of art, offering collectors a piece of digital heritage that stands the test of time.",
    mtSTS : "Minting Now"
  }
];

const bannerClass = document.getElementsByClassName('banner-wrapper');

const bannerHTML = bannerData
  .map((data) => {
    return `
      <div class="swiper-slide">
              <div class="banner-card" style="background:linear-gradient(0deg, rgba(0, 0, 0, 0.650), rgba(0, 0, 0, 0.650)), url('./nft/${data.bg}'); background-position: center; background-repeat: no-repeat; background-size: cover;">
                <div class="content">
                  <img class="nft-banner-img" src="./nft/${data.gif}" alt="${data.nama}" loading="lazy">
                  <div class="content-desc">
                    <p class="fs-5" style="color: rgba(255, 255, 255, 0.87);">${data.mtSTS}</p>
                    <p class="fs-2 fw-bold">${data.nama}</p>
                    <p class="fs-6 nft-desc" style="color: rgba(255, 255, 255, 0.87);">${data.desc}</p>
                    <button class="btn btn-light mt-3">${data.mtSTS}</button>
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

