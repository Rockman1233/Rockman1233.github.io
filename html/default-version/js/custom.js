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
    

});


