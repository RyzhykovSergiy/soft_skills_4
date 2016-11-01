$(function() {
    var basis = $("#carousel-basis");
    basis.owlCarousel({
        loop:true,
        dots: true,     
        nav: true,
        items: 1,

        autoplay:true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        mouseDrag: false
    });
});
