document.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
      header.style.background = "#292f36"; // Set the background color when scrolled
  } else {
      header.style.background = "transparent"; // Set the initial transparent background
  }
});

function toggleMenu(){
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".navigation"); 
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
}
//slider
var swiper = new Swiper(".testimonial-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      
      800: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
  //end of slider