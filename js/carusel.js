$(document).ready(function(){
   
    const owl = $('.slider')
    owl.owlCarousel({
        items: 1,
        loop: true,
    });

    const prev = $('.slider__arrow--left');
    const next = $('.slider__arrow--right');

    prev.click(function(){
        owl.trigger('prev.owl.carousel');
    });

    next.click(function(){
        owl.trigger('next.owl.carousel');
    });



  });


 