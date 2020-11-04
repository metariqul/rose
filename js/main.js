(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {

        //    SEARCH BOX
        $(".search-box span").on("click", function () {
            $(".search-box input").addClass("open");
        });
        if ($('.search-box span').length) {
            $('.search-box span').on('click', function () {
                var searchform = $('.form-control');
                var $val = (searchform.width());
                if ($val == '0') {
                    $val = '240px';
                    $('.form-control').css({
                        padding: '0 0 0 15px',
                        margin: '0 15px 0 0'
                    });
                } else {
                    $val = '0';
                    $('.form-control').css({
                        padding: '0',
                        transition: 'all ease-in-out 0.2s',
                    });
                }
                searchform.animate({
                    width: $val
                }, 400)
            });
        }
        //   SLIDER CAROUSEL
        $('.slider-area').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            items: 1,
            autoplay: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            animateIn: 'fadeInDown',
        });
        /*-------------------------------
        SLIDER EFFECT
        ---------------------------------*/
        $('.slider-area,.banner-area').on("translate.owl.carousel", function (e) {
            $(".slide-info .slide-tag").removeClass("animated fadeInUp").css("opacity", "0");
            $(".slide-info h2").removeClass("animated fadeInDown").css("opacity", "0");
            $(".slide-info p").removeClass("animated fadeInDown").css("opacity", "0");
            $(".slide-info .custom-btn").removeClass("animated fadeInDown").css("opacity", "0");
        });
        $('.slider-area,.banner-area').on("translated.owl.carousel", function (e) {
            $(".slide-info .slide-tag").addClass("animated fadeInUp").css("opacity", "1");
            $(".slide-info h2").addClass("animated fadeInDown").css("opacity", "1");
            $(".slide-info p").addClass("animated fadeInDown").css("opacity", "1");
            $(".slide-info .custom-btn").addClass("animated fadeInDown").css("opacity", "1");
        });
        //   BANNER CAROUSEL
        $('.banner-area').owlCarousel({
            loop: true,
            nav: true,
            items: 1,
            autoplay: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        });
        // HOME-2 SLIDER
        $('.slide-list').owlCarousel({
            loop: true,
            margin: 1.5,
            nav: true,
            autoplay: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3,
                    nav: true
                }
            }
        })
        // ARTICLE CAROUSEL
        $(".s-thumb-carousel").owlCarousel({
            navigation: false, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            autoPlay: true,
        });

        $(".article-thumb-carousel").owlCarousel({
            loop: true,
            items: 1,
            autoplay: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']

        });
        //   INSTAGRAM CAROUSEL
        $(".instagram-wrap").owlCarousel({
            loop: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsiveClass: true,
            margin: 3,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 3,
                },
                1000: {
                    items: 5,
                }
            },
        });

        // RELATED POST
        $(".related-wpap").owlCarousel({
            loop: true,
            nav: false,
            responsiveClass: true,
            margin: 15,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                }
            },
        });

        // SLIDE WIDGET
        $(".slide-widget").owlCarousel({
            loop: true,
            nav: true,
            items: 1,
            autoplay: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });

        // SCROLLUP
        $.scrollUp({
            scrollText: "<i class='fa fa-long-arrow-up'></i>",
            animation: 'fade'
        });

        //  MOBILE MENU
        $('.mobile-menu nav').meanmenu();
        
        $(window).on('load', function () {
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({ 'overflow': 'visible' });
    })
        // MAP INIT
        var wWidth = $(window).width();
        var googleMapSelector = $('#contactgoogleMap'),
            myCenter = new google.maps.LatLng(40.705311, -74.258188);

        function initialize() {
            var mapProp = {
                center: myCenter,
                zoom: 10,
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [{
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#e9e9e9"
                }, {
                        "lightness": 17
                }]
            }, {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f5f5f5"
                }, {
                        "lightness": 20
                }]
            }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#ffffff"
                }, {
                        "lightness": 17
                }]
            }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#ffffff"
                }, {
                        "lightness": 29
                }, {
                        "weight": 0.2
                }]
            }, {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#ffffff"
                }, {
                        "lightness": 18
                }]
            }, {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#ffffff"
                }, {
                        "lightness": 16
                }]
            }, {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f5f5f5"
                }, {
                        "lightness": 21
                }]
            }, {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#dedede"
                }, {
                        "lightness": 21
                }]
            }, {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "visibility": "on"
                }, {
                        "color": "#ffffff"
                }, {
                        "lightness": 16
                }]
            }, {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "saturation": 36
                }, {
                        "color": "#333333"
                }, {
                        "lightness": 40
                }]
            }, {
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                }]
            }, {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f2f2f2"
                }, {
                        "lightness": 19
                }]
            }, {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#fefefe"
                }, {
                        "lightness": 20
                }]
            }, {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#fefefe"
                }, {
                        "lightness": 17
                }, {
                        "weight": 1.2
                }]
            }]
            };
            var map = new google.maps.Map(document.getElementById("contactgoogleMap"), mapProp);

            var marker = new google.maps.Marker({
                position: myCenter,
            });

            var infowindow = new google.maps.InfoWindow({
                content: "We are here"
            });
            infowindow.open(map, marker);

            marker.setMap(map);
            setTimeout(function () {
                $('.gm-style-iw').parent().addClass('hello');
            }, 1000);
        }
        if (googleMapSelector.length) {
            google.maps.event.addDomListener(window, 'load', initialize);
        }
        

    });

}(jQuery));
