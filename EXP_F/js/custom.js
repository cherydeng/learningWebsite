/**
 * http://kopatheme.com
 * Copyright (c) 2016 Kopatheme
 *
 * Licensed under the GPL license:
 *  http://www.gnu.org/licenses/gpl.html
 **/
/**
*  
1. Main Slider
2. Slick slide
3. Count up
4. Owl Carousel
5. Hambeger Menu
6. Map
7. Masonry
8. Search
9. Accordion
10. ScrollBar
11. Tabs Bootstrap
12. Countdown Timer

*-----------------------------------------------------------------
**/
"use strict";
jQuery(document).ready(function(){

    
    /*1. Main slider*/
	if (jQuery('.kopa-widget-slider').length) {
        jQuery(' .slider-pro').sliderPro({
            height: 540,
            forceSize: 'fullWidth',
            arrows: true,
            buttons: false,
            waitForLayers: false,
            fadeOutPreviousSlide: false,
            fadeArrows: false,
            autoScaleLayers: true,
            slideDistance: 0,
            autoplayDelay: 5000,
            autoplay: false,
            breakpoints: {
                1024: {
                    height: 295,
                }
            },
        }); 
        jQuery('.module-slider-04 .sp-previous-arrow').append('<p>come to the <span>bronx</span></p>');
        jQuery('.module-slider-04 .sp-next-arrow').append('<p>see next <span>slider</span></p>');
    };

    /*2. Slick slide*/
    if (jQuery('.kopa-widget-testimonials').length) {
        $('.module-testimonials-01 .slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav',
            adaptiveHeight: true,
        });
        $('.module-testimonials-01 .slider-nav').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            prevArrow: null,
            nextArrow: null,
            loop: true,
        });
    }

    if (jQuery('.module-widget-latest_events-02').length) {
        jQuery('.module-widget-latest_events-02 .list-events-slide').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true
        })
    }

    if (jQuery('.kopa-tabs.style-02').length) {
        jQuery('.kopa-tabs.style-02 .js-slick').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            vertical: true
        });
        jQuery('.kopa-tabs.style-02 .js-slick-2').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            vertical: true
        })
    }

    if (jQuery('.kopa-gallery-slider').length) {
        jQuery('.kopa-gallery-slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
        })
    }

    if(jQuery('.kopa-gallery-01').length){
        jQuery('.kopa-gallery-01.js-slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
        });
    }

    if(jQuery('.module-list_event-04').length){
        $('#sync1').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            asNavFor: '#sync2',
            dots: false,
        });
        $('#sync2').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '#sync1',
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            arrows: false,
        });
    }

    /*3. Count up*/
    if (jQuery('.intergers').length) {
        jQuery('.intergers').counterUp({
            delay: 50,
            time: 3000
        });
    }

    /*4. Owl Carousel*/
    if(jQuery('.js-shop-slider').length){
        jQuery('.js-shop-slider').owlCarousel({
            items: 1,
            singleItem: true,
            pagination: false,
            navigation: true,
            navigationText: false,
            loop: true,
            
        })
    }

    if(jQuery('.kopa-widget-news').length){
        jQuery('.module-news-04 .style-gallery .entry-thumb').owlCarousel({
            items: 1,
            singleItem: true,
            pagination: false,
            navigation: true,
            navigationText: false,
            loop: true, 
        })
    }

    if(jQuery('.module-testimonials-05').length){
        jQuery('.module-testimonials-05.js-carousel').owlCarousel({
            items: 1,
            singleItem: true,
            pagination: true,
            navigation: false,
            navigationText: false,
            loop: true,
            
        })
    }

    if(jQuery('.module-slider-05').length){
        jQuery('.module-slider-05').owlCarousel({
            items: 1,
            singleItem: true,
            pagination: false,
            navigation: true,
            navigationText: false,
            loop: true,
        })
    }

    if(jQuery('.module-research-03').length){
        jQuery('.module-research-03 .js-slider').owlCarousel({
            items: 1,
            singleItem: true,
            pagination: true,
            navigation: false,
            navigationText: false,
            loop: true,
        })
    }

    if(jQuery('.single-portfolio').length){
        jQuery('.single-portfolio .portfolio-slider').owlCarousel({
            items: 1,
            singleItem: true,
            pagination: false,
            navigation: true,
            navigationText: false,
            loop: true,
        })
    }

    /*5. Hambeger Menu*/
    if(jQuery('#kopa-menu-scroll').length){
        jQuery('.kopa-hamburger-menu').on('click', function(){
            jQuery('#kopa-menu-scroll').toggleClass('active-scroll-menu');
        });
        jQuery('.kopa-close-menu-scroll span').on('click', function(){
            jQuery('#kopa-menu-scroll').removeClass('active-scroll-menu');
        })
    }
    if(jQuery('.kopa-menu-click').length){
        
        jQuery('.kopa-menu-click .menu-item-has-children > a').on('click', function(){
           
            var $ul = jQuery(this).next('ul');
            if($ul.hasClass('active-children-menu')){
                $ul.removeClass('active-children-menu').slideUp();
            }else{
                jQuery('.kopa-menu-click .active-children-menu').removeClass('active-children-menu').slideUp();
                $ul.addClass('active-children-menu').slideDown();
            }
            
        })
    }

    /*6. Map*/
    if (jQuery('.kopa-map-01').length) {
        jQuery(function() {
            jQuery('.kopa-map-01')
                .gmap3({
                    center: [48.8620722, 2.352047],
                    zoom: 11,
                    scrollwheel: false,
                    styles: [{ "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#444444" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#eeeeee" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.station.bus", "elementType": "labels.icon", "stylers": [{ "saturation": "-16" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#649cd5" }, { "visibility": "on" }] }]
                })
                .marker([
                    { position: [48.8620722, 2.352047], icon: "img/icon/map.png" },
                ])
        });
    }

    /*7. Masonry*/
    var filter = jQuery('.kopa-widget-portfolio');

    if (jQuery(filter).length) {

        jQuery(filter).each(function() {

            var container = jQuery(this).find('.masonry-content'),
                m_filters = jQuery(this).find('.masonry-filter').children('a');
            var masonryOptions = {
                columnWidth: 1,
                itemSelector: '.ms-item.show'
            };
            container.imagesLoaded(function() {

                var m_grid = container.masonry(masonryOptions);

                m_filters.on('click',function(event) {

                    event.preventDefault();
                    m_filters.removeClass('active');
                    jQuery(this).addClass('active');
                    var m_filter_val = jQuery(this).data('val');

                    container.find('.ms-item').each(function() {
                        var m_item_val = jQuery(this).data('val').toString().split(',');
                        var a = m_item_val.indexOf(m_filter_val.toString()) > -1;

                        if (m_filter_val == "*") {
                            jQuery(this).removeClass('hide');
                            jQuery(this).addClass('show');
                        } else {
                            if (a == true) {
                                jQuery(this).removeClass('hide');
                                jQuery(this).addClass('show');
                            } else {
                                jQuery(this).removeClass('show');
                                jQuery(this).addClass('hide');
                            }
                        }
                    });

                    container.masonry('layout');

                });

            });

        });
    }

    /*8. Search*/
    if(jQuery('.kopa-search').length){
        jQuery('.kopa-search button').on('click', function(){
            jQuery('.kopa-search input').toggleClass('active');
        })
    }

    /*9. Accordion*/
    jQuery('.collapse').collapse('hide');
    jQuery('#accordion2 .collapse').collapse('show');

    /*10. ScrollBar*/
    if (jQuery('#kopa-menu-scroll').length) {
        jQuery("#kopa-menu-scroll").mCustomScrollbar();
    }

    /*11. Tabs Bootstrap*/
    if(jQuery('.nav-tabs').length){
        jQuery('.nav-tabs > li a').on('click', function(e){
            e.preventDefault();
            jQuery(this).tab('show');
        });
    }

    if(jQuery('.kopa-tabs').length){
        $('.nav-tabs a').on('click',function (e) {
            e.preventDefault()
            $(this).tab('show')
        })
    }

    /*12. Countdown Timer*/
    if(jQuery('#timer').length){
        var timer;
        var compareDate = new Date();
        compareDate.setDate(compareDate.getDate() + 40); 
        timer = setInterval(function() {
            timeBetweenDates(compareDate);
        }, 1000);
        function timeBetweenDates(toDate) {
            var dateEntered = toDate;
            var now = new Date();
            var difference = dateEntered.getTime() - now.getTime();
            if (difference <= 0) {
                /*Timer done*/
                clearInterval(timer);
            } else {
                var seconds = Math.floor(difference / 1000);
                var minutes = Math.floor(seconds / 60);
                var hours = Math.floor(minutes / 60);
                var days = Math.floor(hours / 24);
                hours %= 24;
                minutes %= 60;
                seconds %= 60;
                jQuery("#days").text(days);
                jQuery("#hours").text(hours);
                jQuery("#minutes").text(minutes);
                jQuery("#seconds").text(seconds);
            }
        }
    }

    if(jQuery('#timer-02').length){
        var timer;
        var compareDate = new Date();
        compareDate.setDate(compareDate.getDate() + 40); //just for this demo today + 7 days
        timer = setInterval(function() {
            timeBetweenDates(compareDate);
        }, 1000);
        function timeBetweenDates(toDate) {
            var dateEntered = toDate;
            var now = new Date();
            var difference = dateEntered.getTime() - now.getTime();
            if (difference <= 0) {
                /*Timer done*/
                clearInterval(timer);
            } else {
                var seconds = Math.floor(difference / 1000);
                var minutes = Math.floor(seconds / 60);
                var hours = Math.floor(minutes / 60);
                var days = Math.floor(hours / 24);
                hours %= 24;
                minutes %= 60;
                seconds %= 60;
                jQuery("#days-02").text(days);
                jQuery("#hours-02").text(hours);
                jQuery("#minutes-02").text(minutes);
                jQuery("#seconds-02").text(seconds);
            }
        }
    }

});