window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    let navStyle = document.getElementById("navbar");
    navStyle.classList.add("nav-bg");
  } else {
    let navStyle = document.getElementById("navbar");
    navStyle.classList.remove("nav-bg");
  }
}

$(".owl-carousel").owlCarousel({
  loop: true,
  nav: false,
  dot: true,
  loop: true,
  margin: 25,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    792: {
      items: 2,
    },
  },
});
