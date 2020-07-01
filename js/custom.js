$(document).ready(function() { 
    $(".slide-inner").owlCarousel({
        items : 1,
        slideSpeed : 6000,
        autoplayTimeout: 6000,
        nav: true,
        autoplay: true,
        dots: true,
        loop: true,
        navText: ['<img src="images/left.png">','<img src="images/right.png">']
    });
});

    
