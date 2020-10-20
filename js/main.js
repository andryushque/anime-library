$(document).ready(function () {
  /*=== 01. Slick Nav ===*/
  // Header mobile menu
  const mmenu = $('ul#header-navigation');
  if(mmenu.length){
    mmenu.slicknav({
      prependTo: ".mmenu",
      closedSymbol: '+',
      openedSymbol: '-'
    });
  };

  /*=== 02. OwlCarousel ===*/
  // Intro section slider
  const introSlider = $(".intro-wrapper")
  introSlider.owlCarousel({
    loop: true,
    items: 1,
    nav: true,
    dots: true,
    navText: ["<span><i class='fas fa-angle-left'></i></span>", "<span><i class='fas fa-angle-right'></i></span>"],
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    mouseDrag: false
  });
});
