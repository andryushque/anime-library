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
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true, 
    mouseDrag: false
  });

  /*=== 03. Sidebar tabs ===*/
  const filterTab = $("[data-filter]");
  filterTab.on("click", function (event) {
    event.preventDefault();
    $(this).addClass("active").siblings().removeClass("active");
  });
  if ($(".sidebar__items").length > 0) {
    const containerEl = document.querySelector(".sidebar__items");
    const mixer = mixitup(containerEl);
  }

  /*=== 04. To Top Button ===*/
  const topButton = $(".top-button");
  topButton.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "500");
  });
});
