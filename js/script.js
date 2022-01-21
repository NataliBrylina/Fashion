(function($) {
  $(function() {
    
    $('ul.product__tabs-captions').on('click', 'li:not(.product__tab_active)', function() {
      $(this)
        .addClass('product__tab_active').siblings().removeClass('product__tab_active')
        .closest('div.product__tabs').find('div.product__tabs-content').removeClass('product__tabs-content_active').eq($(this).index()).addClass('product__tabs-content_active');
    });
    
  });
  })(jQuery);

  $(document).ready(function(){
    $('.testimonials__slider').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/slide-key-left.png" alt="button prev"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/slide-key-right.png" alt="button next"></button>'
    });
  });


