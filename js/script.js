
$('#imageGallery').lightSlider({
    gallery:true,
    item:1,
    loop: true,
    enableDrag: true,
    slideMove: 2,
    thumbItem:4,
    slideMargin:0,
    currentPagerPosition:'middle',
    onSliderLoad: function(el) {
        el.lightGallery({
            selector: '#imageGallery .lslide'
        });
    }
});

$('[data-toggle="tooltip"]').tooltip();


/* activate article-page sidebar-affix */
$('#right-col').affix({
    offset: {
        top: 100,
        bottom: 850
    }
});

/* activate article-page scrollspy menu in the affix section */
var $body   = $(document.body);
$body.scrollspy({
    target: '#article-navigation',
    offset: 300
});









/*$("#example_id").ionRangeSlider({
    type: "double",
    grid: true,
    min: 0,
    max: 11
});
$("#price").ionRangeSlider({
    type: "double",
    grid: true,
    min: 0,
    max: 1000,
    prefix: "$"
});*/

/*var $body   = $(document.body);
var navHeight = $('#chapter-navigation').outerHeight(true) + 10;

$body.scrollspy({
    target: '#leftCol',
    offset: navHeight
});*/





