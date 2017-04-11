$(function() {
    $('a[href="#"]').click(function(e){ e.preventDefault(); });

    /*! http://johnpolacek.github.io/imagefill.js/ */
    // $('.item').imagefill();

    /*! http://www.jacklmoore.com/autosize/ */
    autosize($('textarea'));


    /*! https://select2.github.io/ */
    $('select').select2({
      minimumResultsForSearch: Infinity
    });

    /*! Inputs mask*/
    function inputMask() {
      $(".mask-date").mask("99.99.9999",{placeholder:"__.__.____"});
      $(".mask-year").mask("9999",{placeholder:""});
      $(".mask-tel").mask("+7 (999) 999-99-99",{placeholder:"_"});
    };
    inputMask();

    function modals() {
      $('.popup').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,          
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
      });

      
    }
    modals();

    var bumpIt = function() {  
          $('body').css('margin-bottom', $('.m_footer').height());
        },
        didResize = false;

    bumpIt();

    $(window).resize(function() {
      didResize = true;
    });
    setInterval(function() {  
      if(didResize) {
        didResize = false;
        bumpIt();
      }
    }, 250);

    function attachFile() {
      $('input[type=file]').on('change', function(){
        var $result = $('.attach-file-result');
        var filename = $(this).val().split('\\').pop();
        if ( filename != '' ) {
          $(this).parent().next().find('.val').text('Файл: '+filename);
          $(this).parent().hide();
          $(this).parent().next().show();
        } else {
          $(this).parent().show();
          $(this).parent().next().find('.val').text('');
          $(this).parent().next().hide();
        }
      });

      $('.attach-file-result .remove').on('click', function(){
        $(this).parent().hide();
        $(this).parent().find('.val').text('');
        $(this).parent().prev().show();
        $(this).parent().prev().find('input').val('');
      });
    }
    attachFile();

    // Удалить, если не нужно
    function test_form_success() {
      $('form').on('submit', function(){
        var magnificPopup = $.magnificPopup.instance; 
        magnificPopup.close();
        setTimeout(function() {
          $('#success').trigger('click');
        }, 300);
        return false;
      });
    }
    test_form_success();
    // end Удалить, если не нужно

    function sidebarMobileNav() {
      var $sidebarMenu = $('.m_sidebar-menu');
      var $button = $('.bfxd');
      $button.on('click', function(){
        if ( $(this).hasClass('open') ) {
          $(this).toggleClass('open');
          $sidebarMenu.slideToggle(500);            
        } else {
          $(this).toggleClass('open');
          $sidebarMenu.slideToggle(500);
          $('html, body').animate({
            scrollTop: $sidebarMenu.offset().top - 15
          }, 500);
        }
      });      
    }
    sidebarMobileNav();

    function responsiveTable() {
      $('table').each(function(){
        $(this).wrap('<div class="responsive-table"></div>');
      });
    } 
    responsiveTable();


    $('.zoom-gallery').magnificPopup({
        delegate: 'a.item',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
          verticalFit: true
        },
        gallery: {
          enabled: true
        },
        zoom: {
          enabled: true,
          duration: 300, // don't foget to change the duration also in CSS
          opener: function(element) {
            return element.find('img');
          }
        },
        callbacks: {
          buildControls: function() {
            this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
          }
        }        
      });

      $('.m_comments').magnificPopup({
        delegate: '.item .image a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
          verticalFit: true
        },
        gallery: {
          enabled: true
        },
        zoom: {
          enabled: true,
          duration: 300, // don't foget to change the duration also in CSS
          opener: function(element) {
            return element.find('img');
          }
        },
        callbacks: {
          buildControls: function() {
            this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
          }
        }        
      });

      $('.m_comments .details a').on('click', function(){
        $(this).parent().parent().prev().find('a').trigger('click');
      });

    $('.article-carousel').slick({
      arrows: true,
      dots: true
    });

   function mediaGallery() {
      GALLERY_STATUS = false;

      $('.gallery-popup .large, .gallery-popup .thumbs').html($('#mediagallery').clone());
      $('.gallery-popup .large, .gallery-popup .thumbs').find('.columns .column').unwrap();

      $('#mediagallery .m_media-item').on('click', function(){
        $('#mgallery').trigger('click');     
        var MG_CURRENT_SLIDE = $(this).parent().index();
        setTimeout(function(){
          $('.gallery-popup .large').slick('slickGoTo', MG_CURRENT_SLIDE);
        },100);    
      });

      $('.popup-g').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,          
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in',
        callbacks: {
          open: function() {
            if ( GALLERY_STATUS == false ) {
              $('.gallery-popup .large').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
                fade: true,
                infinite: false,
                asNavFor: '.gallery-popup .thumbs'
              });

              $('.gallery-popup .thumbs').slick({
                slidesToShow: 9,
                slidesToScroll: 1,
                asNavFor: '.gallery-popup .large',
                dots: false,
                arrows: false,
                centerMode: false,
                focusOnSelect: true,
                swipeToSlide: true,
                infinite: false,
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 7
                    }
                  }, 
                  {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 5
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 4
                    }
                  },
                  {
                    breakpoint: 479,
                    settings: {
                      slidesToShow: 3
                    }
                  }
                ]
              });
              GALLERY_STATUS = true;
            }
          }
        }
      });

      
   }
   mediaGallery();

   
   $('.product-gallery-lead').magnificPopup({
      delegate: 'a',
      type: 'image',
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
        verticalFit: true        
      },
      gallery: {
        enabled: false
      },
      zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function(element) {
          return element.find('img');
        }
      }      
    });

    $('.schemes-carousel').magnificPopup({
      delegate: 'a',
      type: 'image',
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
        verticalFit: true        
      },
      gallery: {
        enabled: false
      },
      zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function(element) {
          return element.find('img');
        }
      }      
    });
    //=include modules.js
});