/**	
	* SinglePro HTML 1.0	
	* Template Scripts
	* Created by WpFreeware Team

	Custom JS
	
	1. Superslides Slider
	2. Fixed Top Menubar
	3. Featured Slider
	4. Skill Circle
	5. Wow animation
	6. Project Counter
	7. TEAM SLIDER
	8. BLOG SLIDER
	9. TESTIMONIAL SLIDER
	10. CLIENTS SLIDER
	11. Google Map
	12. SCROLL TOP BUTTON
	13. PRELOADER 
	14. MENU SCROLL 
	15. MOBILE MENU CLOSE 	
	
**/

jQuery(function($){


	/* ----------------------------------------------------------- */
	/*  1. Superslides Slider
	/* ----------------------------------------------------------- */
	jQuery('#slides').superslides({
      animation: 'slide',
      play: '5000'
    });
	
	
	/* ----------------------------------------------------------- */
	/*  2. Fixed Top Menubar
	/* ----------------------------------------------------------- */

	// For fixed top bar
       $(window).scroll(function(){
        if($(window).scrollTop() >100 /*or $(window).height()*/){
            $(".navbar-fixed-top").addClass('past-main');   
        }
    else{    	
      $(".navbar-fixed-top").removeClass('past-main');
      }
    });


	/* ----------------------------------------------------------- */
	/*  5. Wow smooth animation
	/* ----------------------------------------------------------- */

	wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100
      }
    );
    wow.init();

	/* ----------------------------------------------------------- */
	/*  7. TEAM SLIDER
	/* ----------------------------------------------------------- */

		$('.team_slider').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  play: '5000',
		  slidesToShow: 4,
		  slidesToScroll: 4,
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        infinite: true,
		        dots: true
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


	/* ----------------------------------------------------------- */
	/*  12. SCROLL TOP BUTTON
	/* ----------------------------------------------------------- */

	//Check to see if the window is top if not then display button

	  $(window).scroll(function(){
	    if ($(this).scrollTop() > 300) {
	      $('.scrollToTop').fadeIn();
	    } else {
	      $('.scrollToTop').fadeOut();
	    }
	  });
	   
	  //Click event to scroll to top

	  $('.scrollToTop').click(function(){
	    $('html, body').animate({scrollTop : 0},800);
	    return false;
	  });


	/* ----------------------------------------------------------- */
	/*  13. PRELOADER 
	/* ----------------------------------------------------------- */ 

	  jQuery(window).load(function() { // makes sure the whole site is loaded
      $('#status').fadeOut(); // will first fade out the loading animation
      $('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
      $('body').delay(100).css({'overflow':'visible'});
    })


	/* ----------------------------------------------------------- */
	/*  14. MENU SCROLL 
	/* ----------------------------------------------------------- */

	//MENU SCROLLING WITH ACTIVE ITEM SELECTED

	// Cache selectors
	var lastId,
	topMenu = $("#top-menu"),
	topMenuHeight = topMenu.outerHeight()+13,
	// All list items
	menuItems = topMenu.find("a"),
	// Anchors corresponding to menu items
	scrollItems = menuItems.map(function(){
	  var item = $($(this).attr("href"));
	  if (item.length) { return item; }
	});

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e){
	  var href = $(this).attr("href"),
	      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
	  $('html, body').stop().animate({ 
	      scrollTop: offsetTop
	  }, 900);
	  e.preventDefault();
	});

	// Bind to scroll
	$(window).scroll(function(){
	   // Get container scroll position
	   var fromTop = $(this).scrollTop()+topMenuHeight;
	   
	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
	     if ($(this).offset().top < fromTop)
	       return this;
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   
	   if (lastId !== id) {
	       lastId = id;
	       // Set/remove active class
	       menuItems
	         .parent().removeClass("active")
	         .end().filter("[href=#"+id+"]").parent().addClass("active");
	   }           
	})


	/* ----------------------------------------------------------- */
	/*  15. MOBILE MENU ACTIVE CLOSE 
	/* ----------------------------------------------------------- */ 

	$('.navbar-nav').on('click', 'li a', function() {
	  $('.navbar-collapse').collapse('hide');
	});

	
});
