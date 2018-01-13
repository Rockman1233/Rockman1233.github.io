$(document).ready(function () {
    "use strict";
    
	//Testimonial Carousel
    $("#testimonial-carousel").owlCarousel({
        items : 1,
        itemsDesktop : [1199, 1],
        itemsDesktopSmall : [980, 1],
        itemsTablet: [768, 1],
        itemsMobile : [479, 1],
        navigation : true,
        pagination : true,
        paginationNumbers: false,
        transitionStyle : "goDown",
        navigationText : ["", ""]
    });
    
    //Smooth Scroll
    smoothScroll.init();
    
    //Scroll Spy
    $("body").scrollspy({
        target : '#mypress-navbar-collapse'
    });
    
    
    // Isotope Gallery
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        columnWidth : '.normal'
      }
    });
    var filterFns = {
      numberGreaterThan50: function() {
        var number = $(this).find('.number').text();
        return parseInt( number, 10 ) > 50;
      },
      ium: function() {
        var name = $(this).find('.name').text();
        return name.match( /ium$/ );
      }
    };
    $('.filters-button-group').on( 'click', 'button', function() {
      var filterValue = $( this ).attr('data-filter');
      filterValue = filterFns[ filterValue ] || filterValue;
      $grid.isotope({ filter: filterValue });
    });
    $('.button-group').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
      });
    });
    
    //jQuery Counter
    $('.counter').counterUp({
        time : 1500
    });
    
    //Progress Chart
    $('.chart').easyPieChart({
        scaleColor: false,
        barColor: '#ffc815',
        lineCap: 'round',
        size: 120,
        lineWidth: 10,
        easing: 'easeInOutCirc',
        animate: 2000,
        onStep: function(from, to, percent) {
			this.el.children[0].innerHTML = Math.round(percent);
		}
    });
    
    //Portfolio Lightbox
	$('.grid-item').magnificPopup({
		delegate: 'a.port-view',
		type: 'image',
		gallery: {
			enabled: true
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});
    
	//Revolution JS
	var tpj=jQuery;
			
	var revapi1014;
	tpj(document).ready(function() {
		if(tpj("#rev_slider_1014_1").revolution == undefined){
			revslider_showDoubleJqueryError("#rev_slider_1014_1");
		}else{
			revapi1014 = tpj("#rev_slider_1014_1").show().revolution({
				sliderType:"standard",
				jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
				sliderLayout:"fullscreen",
				dottedOverlay:"none",
				delay:9000,
				navigation: {
					keyboardNavigation:"off",
					keyboard_direction: "horizontal",
					mouseScrollNavigation:"off",
					mouseScrollReverse:"default",
					onHoverStop:"off",
					touch:{
						touchenabled:"on",
						swipe_threshold: 75,
						swipe_min_touches: 1,
						swipe_direction: "horizontal",
						drag_block_vertical: false
					},
					bullets: {
						enable:true,
						hide_onmobile:true,
						hide_under:800,
						style:"zeus",
						hide_onleave:true,
						direction:"horizontal",
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:30,
						space:5,
						tmp:'<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span><span class="tp-bullet-title">{{title}}</span>'
					}
				},
				responsiveLevels:[1240,1024,778,480],
				visibilityLevels:[1240,1024,778,480],
				gridwidth:[1240,1024,778,480],
				gridheight:[868,768,960,600],
				lazyType:"none",
				shadow:0,
				spinner:"off",
				stopLoop:"on",
				stopAfterLoops:0,
				stopAtSlide:1,
				shuffle:"off",
				autoHeight:"off",
				fullScreenAutoWidth:"off",
				fullScreenAlignForce:"off",
				fullScreenOffsetContainer: "",
				fullScreenOffset: "60px",
				disableProgressBar:"on",
				hideThumbsOnMobile:"off",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				debugMode:false,
				fallbacks: {
					simplifyAll:"off",
					nextSlideOnWindowFocus:"off",
					disableFocusListener:false,
				}
			});
		}

		RsTypewriterAddOn(tpj, revapi1014);
	});	/*ready*/


});


