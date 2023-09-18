var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
    
  });
  var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  // var swiper = new Swiper('.swiper', {
  //   slidesPerView: 1,
  //   spaceBetween: 30,
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //   loop: true, // Aktifkan loop
  // });
  

const navMenuBtn = document.querySelector(".nav-menu-btn");
const navCloseBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");

// Tambahkan event listener untuk tombol menu
navMenuBtn.addEventListener("click", () => {
  navigation.classList.add("open");
});

// Tambahkan event listener untuk tombol tutup
navCloseBtn.addEventListener("click", () => {
  navigation.classList.remove("open");
});




const menuBtn = document.querySelector(".nav-menu-btn");
const menuDropdown = document.querySelector(".menu-dropdown");

menuBtn.addEventListener("click", function () {
  if (menuDropdown.style.display === "block") {
    menuDropdown.style.display = "none";
  } else {
    menuDropdown.style.display = "block";
  }
});
