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
});
