(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Fixed Navbar
  $(window).scroll(function () {
    if ($(window).width() < 992) {
      if ($(this).scrollTop() > 45) {
        $(".fixed-top").addClass("bg-white shadow");
      } else {
        $(".fixed-top").removeClass("bg-white shadow");
      }
    } else {
      if ($(this).scrollTop() > 45) {
        $(".fixed-top").addClass("bg-white shadow").css("top", 0);
      } else {
        $(".fixed-top").removeClass("bg-white shadow").css("top", 0);
      }
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 25,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
})(jQuery);
// Ambil elemen yang diperlukan
var searchIcon = document.getElementById("search-icon");
var searchContainer = document.getElementById("search-container");

// Tambahkan event listener untuk klik pada ikon search
searchIcon.addEventListener("click", function (event) {
  event.stopPropagation();
  event.preventDefault();

  // Buat elemen input teks
  var inputElement = document.createElement("input");
  inputElement.type = "text";
  inputElement.classList.add(
    "form-control",
    "rounded-pill",
    "ml-5",
    "input-box"
  );
  inputElement.placeholder = "Apple";

  // Sisipkan elemen input teks ke dalam search container
  searchContainer.appendChild(inputElement);

  // Fokus pada elemen input teks
  inputElement.focus();

  // Hapus ikon search
  searchIcon.remove();

  // Tambahkan event listener untuk klik pada elemen dokumen
  document.addEventListener("click", function (event) {
    // Periksa apakah elemen yang diklik adalah input teks atau search container
    if (
      event.target !== inputElement &&
      event.target !== searchContainer &&
      !searchContainer.contains(event.target)
    ) {
      // Hapus elemen input teks
      inputElement.remove();

      // Tambahkan kembali ikon search
      searchContainer.appendChild(searchIcon);
    }
  });
  document.getElementById("search-icon").addEventListener("click", function () {
    var searchQuery = document.getElementById("search-input").value;
    // Lakukan logika pencarian sesuai kebutuhan Anda
    // Contoh: Mengarahkan pengguna ke halaman terkait jika nama ditemukan
    if (searchQuery === "Apel") {
      window.location.href = "index.html#apel";
    } else if (searchQuery === "Nama2") {
      window.location.href = "https://www.example.com/nama2";
    } else {
      // Jika nama tidak ditemukan, Anda dapat menampilkan pesan atau mengambil tindakan lain
      alert("Nama tidak ditemukan");
    }
  });
  const carouselContainer = document.querySelector(".carousel-container");
  const carouselSlides = Array.from(
    document.querySelectorAll(".carousel-slide")
  );

  const prevButton = document.querySelector(".carousel-prev");
  const nextButton = document.querySelector(".carousel-next");

  let currentIndex = 0;
  const slideWidth = carouselSlides[0].offsetWidth;

  function slideToIndex(index) {
    carouselContainer.style.transform = `translateX(-${slideWidth * index}px)`;
  }

  function slidePrev() {
    currentIndex =
      currentIndex === 0 ? carouselSlides.length - 1 : currentIndex - 1;
    slideToIndex(currentIndex);
  }

  function slideNext() {
    currentIndex =
      currentIndex === carouselSlides.length - 1 ? 0 : currentIndex + 1;
    slideToIndex(currentIndex);
  }

  prevButton.addEventListener("click", slidePrev);
  nextButton.addEventListener("click", slideNext);
});
