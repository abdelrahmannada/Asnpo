$(function(){

		$('#testi').ready(function(){
		  $(".owl-carousel").owlCarousel({
	   		items:1,
	      itemsDesktop:[1199,1],
	      itemsDesktopSmall:[1000,1],
	      itemsMobile : [599,1],
	      pagintaion:false,
	      navigationText:false,
	      autoPlay :true ,
	      loop: true,
	      nav: true
		  });

		});


	  $('.gallery').magnificPopup({
	  	delegate: '.popimg',
	  	type:"image",
	  	gallery: {
	  		enabled :true
	  	}
	 


	  });

	  $('.gallery').isotope({
  	// options
		  itemSelector: '.items',
		  layoutMode: 'fitRows',
		  percentPosition: true

		});



		$('.filtering .fil-link').click(function(){
			
			$(this).addClass('active');
			$('.filtering .fil-link').removeClass('active'); 

			var selector = $(this).attr("data-filter");
			$('.gallery').isotope({
				filter : selector
			});
			
		});


		$(".home-link").click(function(){
			$('.popup').fadeOut(700);
					// smaller header
			$('.home div.home-box').removeClass('smallit');
		});


		






			$('.show').click(function () {

					$($(this).data('popup')).fadeIn(1000);

				});


				$('.popup').click(function(){

					$(this).fadeOut(700);
					// smaller header
					$('.home div.home-box').removeClass('smallit');
					
				});

			$('.show').click(function(){
				$('.home div.home-box').addClass('smallit');
				
			});



				$('.popup .popup-info').click(function(e){

					e.stopPropagation();

				});
				$(document).keydown(function (e) {

					if (e.keyCode == 27) {

						$('.popup').fadeOut(700);
						$('.home div.home-box').removeClass('smallit').delay(1000);
						
					}
				});


		
			
		


		
		
		});