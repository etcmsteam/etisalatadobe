
  

        // accessories slider
        function initAccessorySwiper() {
          $(document).find('.accessories-wrapper.with-slider').each(function (index) {
            $(this).addClass('card-slider'+index);
            var $slider = $(this);
            $slider.find('.next').addClass('right'+index);
            $slider.find('.prev').addClass('left'+index);
            var slidesCount = $slider.find('.swiper-slide').length;
            $slider.addClass('remove-controls');
            $slider.removeClass('remove-controls'); 
                var $accessoriesSlider = new Swiper(".card-slider" + index + " .swiper-container", {
                  slidesPerView: 2.2,
                  scrollbar: $(this).find(".scrollbar"),
                  nextButton: ".next.right" + index,
                  prevButton: ".prev.left" + index,
                  scrollbarHide: false,
                  scrollbarDraggable: true,
                  breakpoints: {
                    540: {
                      slidesPerView: 2.2,
                    },
                    768: {
                      slidesPerView: 4,
                    },
                    1200: {
                      slidesPerView: 4,
                    },
                    1439: {
                      slidesPerView: 6,
                    },
                    9999: {
                      slidesPerView: 7,
                    },
                  },
                });


            if (slidesCount > 7) {
                $slider.removeClass('remove-controls'); 
            } else if (window.innerWidth < 1200) {
                $slider.removeClass('remove-controls'); 
                var $accessoriesSlider = new Swiper('.card-slider'+index+' .swiper-container', {
                    slidesPerView: 2.2,
                    scrollbar: $(this).find('.scrollbar'),
                    nextButton: '.next.right'+index,
                    prevButton: '.prev.left'+index,
                    scrollbarHide: false,
                    scrollbarDraggable: true,
                    breakpoints: {
                      540: {
                          slidesPerView: 2.2
                      },
                      768: {
                          slidesPerView: 4
                      },
                      1200: {
                          slidesPerView: 4
                      },
                      1439: {
                          slidesPerView: 6
                      },
                      9999: {
                        slidesPerView: 7
                      }
                    }
                  });
            } else {
                $slider.addClass('remove-controls');
            }
            
            
  
  
  
          });
        }

        //etisalat reccommendations cards
        function initRecommendationSwiper() {
            $(document).find('.eti-recommendation-wrapper.with-slider').each(function (index) {
              $(this).addClass('eti-card-slider'+index);
              var $slider = $(this);
              $slider.find('.next').addClass('eti-right'+index);
              $slider.find('.prev').addClass('eti-left'+index);
              var etiSlidesCount = $slider.find('.swiper-slide').length;
              $slider.addClass('remove-controls');
              $slider.removeClass('remove-controls'); 
                  var $accessoriesSlider = new Swiper('.eti-card-slider'+index+' .swiper-container', {
                      slidesPerView: 2.2,
                      scrollbar: $(this).find('.scrollbar'),
                      nextButton: '.next.eti-right'+index,
                      prevButton: '.prev.eti-left'+index,
                      scrollbarHide: false,
                      scrollbarDraggable: true,
                      breakpoints: {
                        540: {
                            slidesPerView: 2.2
                        },
                        768: {
                            slidesPerView: 3
                        },
                        1200: {
                            slidesPerView: 3
                        },
                        1439: {
                            slidesPerView: 4
                        },
                        9999: {
                          slidesPerView: 5
                        }
                      }
                    });
  
  
              if (etiSlidesCount > 5) {
                  $slider.removeClass('remove-controls'); 
              } else if (window.innerWidth < 1200) {
                  $slider.removeClass('remove-controls'); 
                  var $accessoriesSlider = new Swiper('.eti-card-slider'+index+' .swiper-container', {
                      slidesPerView: 2.2,
                      scrollbar: $(this).find('.scrollbar'),
                      nextButton: '.next.eti-right'+index,
                      prevButton: '.prev.eti-left'+index,
                      scrollbarHide: false,
                      scrollbarDraggable: true,
                      breakpoints: {
                        540: {
                            slidesPerView: 2.2
                        },
                        768: {
                            slidesPerView: 3
                        },
                        1200: {
                            slidesPerView: 3
                        },
                        1439: {
                            slidesPerView: 4
                        },
                        9999: {
                          slidesPerView: 5
                        }
                      }
                    });
              } else {
                  $slider.addClass('remove-controls');
              }
              
              
    
    
    
            });
        }

        //etisalat reccommendations cards big
        function initBigRecommendationSwiper() {
            $(document).find('.eti-recommendation-big-card.with-slider').each(function (index) {
              $(this).addClass('eti-big-card-slider'+index);
              var $slider = $(this);
              $slider.find('.next').addClass('eti-big-right'+index);
              $slider.find('.prev').addClass('eti-big-left'+index);
              var etiSlidesCount = $slider.find('.swiper-slide').length;
              $slider.addClass('remove-controls');
              $slider.removeClass('remove-controls'); 
                  var $accessoriesBigCardSlider = new Swiper('.eti-big-card-slider'+index+' .swiper-container', {
                      slidesPerView: 2.2,
                      scrollbar: $(this).find('.scrollbar'),
                      nextButton: '.next.eti-big-right'+index,
                      prevButton: '.prev.eti-big-left'+index,
                      scrollbarHide: false,
                      scrollbarDraggable: true,
                      breakpoints: {
                        540: {
                            slidesPerView: 2.2
                        },
                        768: {
                            slidesPerView: 2.5
                        },
                        1200: {
                            slidesPerView: 2.5
                        },
                        1439: {
                            slidesPerView: 3
                        },
                        9999: {
                          slidesPerView: 3
                        }
                      }
                    });
  
  
              if (etiSlidesCount > 3) {
                  $slider.removeClass('remove-controls'); 
              } else if (window.innerWidth < 1200) {
                  $slider.removeClass('remove-controls'); 
                  var $accessoriesSlider = new Swiper('.eti-big-card-slider'+index+' .swiper-container', {
                      slidesPerView: 2.2,
                      scrollbar: $(this).find('.scrollbar'),
                      nextButton: '.next.eti-big-right'+index,
                      prevButton: '.prev.eti-big-left'+index,
                      scrollbarHide: false,
                      scrollbarDraggable: true,
                      breakpoints: {
                        540: {
                            slidesPerView: 2.2
                        },
                        768: {
                            slidesPerView: 2.5
                        },
                        1200: {
                            slidesPerView: 2.5
                        },
                        1439: {
                            slidesPerView: 3
                        },
                        9999: {
                          slidesPerView: 3
                        }
                      }
                    });
              } else {
                  $slider.addClass('remove-controls');
              }
              
              
    
    
    
            });
        }

        // brands logos
        function initBrandsLogo() {
            $(document).find('.brands-logo.with-slider').each(function (index) {
              $(this).addClass('brands-slider'+index);
              var $slider = $(this);
              $slider.find('.next').addClass('logo-right'+index);
              $slider.find('.prev').addClass('logo-left'+index);
              var etiSlidesCount = $slider.find('.swiper-slide').length;
              $slider.addClass('remove-controls');
              $slider.removeClass('remove-controls'); 
                  var $accessoriesBigCardSlider = new Swiper('.brands-slider'+index+' .swiper-container', {
                      slidesPerView: 2.2,
                      scrollbar: $(this).find('.scrollbar'),
                      nextButton: '.next.logo-right'+index,
                      prevButton: '.prev.logo-left'+index,
                      scrollbarHide: false,
                      scrollbarDraggable: true,
                      breakpoints: {
                        540: {
                            slidesPerView: 3.5
                        },
                        768: {
                            slidesPerView: 5
                        },
                        1200: {
                            slidesPerView: 6
                        },
                        1439: {
                            slidesPerView: 9
                        },
                        9999: {
                          slidesPerView: 9
                        }
                      }
                    });
  
  
              if (etiSlidesCount > 9) {
                  $slider.removeClass('remove-controls'); 
              } else if (window.innerWidth < 1200) {
                  $slider.removeClass('remove-controls'); 
                  var $accessoriesSlider = new Swiper('.brands-slider'+index+' .swiper-container', {
                      slidesPerView: 2.2,
                      scrollbar: $(this).find('.scrollbar'),
                      nextButton: '.next.logo-right'+index,
                      prevButton: '.prev.logo-left'+index,
                      scrollbarHide: false,
                      scrollbarDraggable: true,
                      breakpoints: {
                        540: {
                            slidesPerView: 3.5
                        },
                        768: {
                            slidesPerView: 5
                        },
                        1200: {
                            slidesPerView: 6
                        },
                        1439: {
                            slidesPerView: 9
                        },
                        9999: {
                          slidesPerView: 9
                        }
                      }
                    });
              } else {
                  $slider.addClass('remove-controls');
              }
              
              
    
    
    
            });
        }


  
     
    
     