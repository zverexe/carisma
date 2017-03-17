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
    $("#example_id").ionRangeSlider({
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
    });
});

