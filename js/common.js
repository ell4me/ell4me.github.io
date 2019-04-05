$(document).ready(function() {

		$("a[href='#callback']").on('click', function () {
			$('.hidden_form h3').html(this.text);
		});

		$('.bottom_but .buttons').magnificPopup({
			  type:'inline',
			  midClick: true,
			  mainClass: 'mfp-fade'
			});

			$(".sec_2_bgn").waypoint(function() {
			$(".sec_2_bgn .item-wrap").addClass('animated fadeInUp');
			},{ 
			offset: '85%'
		});
		$(".service").waypoint(function() {
			$(".service .srv-item").addClass('animated fadeInUp');
			},{ 
			offset: '65%'
		});
		$(".profes").waypoint(function() {
			$(".profes .bgn_form").addClass('animated slideInRight');
			},{ 
			offset: '80%'
		});
		$(".testimonials .main_info").waypoint(function() {
			$(".slider_reviews").addClass('animated rollIn');
			},{ 
			offset: '65%'
		});
		$(".sec_3_bgn").waypoint(function() {
			$(".sec_3_bgn .item-wrap").addClass('animated fadeInUp');
			},{ 
			offset: '85%'
		});

		$(".ass2").waypoint(function() {
			$(".ass2 .main_info").addClass('animated slideInLeft');
			},{ 
			offset: '85%'
		});
		$(".dls").waypoint(function() {
			$(".dls .main_info").addClass('animated slideInLeft');
			},{ 
			offset: '85%'
		});

		$(".service").waypoint(function() {
			$(".service .main_info").addClass('animated slideInLeft');
			},{ 
			offset: '85%'
		});
		$(".advantage").waypoint(function() {
			$(".advantage .main_info").addClass('animated slideInLeft');
			},{ 
			offset: '85%'
		});
		$(".work").waypoint(function() {
			$(".work .main_info").addClass('animated slideInLeft');
			},{ 
			offset: '85%'
		});
		$(".our_team").waypoint(function() {
			$(".our_team .main_info").addClass('animated slideInLeft');
			},{ 
			offset: '85%'
		});
		$(".testimonials").waypoint(function() {
			$(".testimonials .main_info").addClass('animated slideInLeft');
			},{ 
			offset: '85%'
		});
		$(".profes").waypoint(function() {
			$(".profes .main_info").addClass('animated slideInLeft');
			},{ 
			offset: '85%'
		});

		$(".dls").waypoint(function() {

			$('.dls .item-wrapper').each(function(index) {
				var that = $(this);
				setInterval(() => {
					that.addClass('item-wrapper-on');
				},index*300);
			});
			},{ 
			offset: '40%'
		});

		$('.main_header .top_menu .hamburger').on('click', function () {
			if($(this).hasClass('is-active')){
				$(this).removeClass('is-active');
			} else{$(this).addClass('is-active');}
		});

		$('.top_menu .hamburger').on('click', function () {
			$('.top_menu ul').slideToggle();
		});




	$('.slider').slick({
		nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
		prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
		swipe: false,
		dots: true,
		autoplay: true,
  		autoplaySpeed: 3000,
  		cssEase: 'ease-in-out'
	});
	
	$(".wrk_btn").waypoint(function() {
			
		$('.our_team .adv_item').each(function(index) {
			var that = $(this);
			setInterval(() => {
				that.removeClass('adv_item-off').addClass('adv_item-on');
			},index*300);
		});
	 });

	$("a[href='#bottom']").click(function() {
  		$("html, body").animate({ scrollTop: $('.ass2').height()+-320+'px' }, "slow");
  		return false;
	});


	$(".main_footer .hamburger").click(function() {
  		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
  		return false;
	});

	$(".bot_btn").click(function() {
  		$("html, body").animate({ scrollTop: 0 }, "slow");
  		return false;
	});

	var waypointsvg = new Waypoint({

		element: $(".work"),
		handler: function(dir) {
			
			if (dir === "down") {

				$(".work .work-item").each(function(index) {
					var ths = $(this);
					setTimeout(function() {
						var myAnimation = new DrawFillSVG({
							elementId: "svg" + index
						});
						ths.addClass('work-item-on');
						ths.children(".txt-content").addClass("txt-content-on");
					}, 500*index);
				});

			};
			this.destroy();
		},
		offset: '50%'
	});


	$(".srv_btn").waypoint(function() {
			
		$('.advantage .adv_item').each(function(index) {
			var that = $(this);
			setInterval(() => {
				that.removeClass('adv_item-off').addClass('adv_item-on');
			},index*300);
		});
	 });


		$('.assessment .item-wrapper').equalHeights();
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


});
