$(document).ready(function() {
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
});

