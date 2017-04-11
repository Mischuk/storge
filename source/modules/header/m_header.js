function headerSearch() {
  var $input = $('.m_header .search input');

  $input.on('focus', function(){
    $(this).parents('.search').addClass('focus');
  });
 
  $(document).mouseup(function (e) {
    var container = $('.m_header .search form');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $('.m_header .search').removeClass('focus');
    }
  });
}
headerSearch();

function headerMobileMenu() {
  var $btn = $('.menu-mobile a');
  var $menu = $('.menu');
  $btn.on('click', function(){
    $(this).toggleClass('open');
    $menu.toggleClass('open');
    $('.layout').toggleClass('active');
  });

  $('.layout').on('click', function(){
    $btn.removeClass('open');
    $menu.removeClass('open');
    $('.layout').removeClass('active');
  });
} 
headerMobileMenu();