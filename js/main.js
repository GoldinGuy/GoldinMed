function send_mail() {
	window.location.href =
		"mailto:ron@goldinmed.com?subject=" +
		encodeURI(document.getElementById("subject_field").value) +
		"&body=" +
		encodeURI(document.getElementById("message_field").value);
	return false;
}

(function ($) {
	"use strict";

	//1.Hide Loading Box (Preloader)
	function handlePreloader() {
		if ($(".preloader").length) {
			$(".preloader").delay(200).fadeOut(500);
		}
	}

	//6.Scroll to a Specific Div
	if ($(".scroll-to-target").length) {
		$(".scroll-to-target").click("click", function () {
			var target = $(this).attr("data-target");
			// animate
			$("html, body").animate(
				{
					scrollTop: $(target).offset().top
				},
				1000
			);
		});
	}

	//28.Elements Animation
	if ($(".wow").length) {
		var wow = new WOW({
			boxClass: "wow", // animated element css class (default is wow)
			animateClass: "animated", // animation css class (default is animated)
			offset: 0, // distance to the element when triggering the animation (default is 0)
			mobile: false, // trigger animations on mobile devices (default is true)
			live: true // act on asynchronously loaded content (default is true)
		});
		wow.init();
	}
	// Testimonial Slider
	// $(".testimonial-carousel").slick({
	// 	infinite: true,
	// 	arrows: false,
	// 	autoplay: true,
	// 	slidesToShow: 2,
	// 	dots: true,
	// 	slidesToScroll: 2,
	// 	responsive: [
	// 		{
	// 			breakpoint: 991,
	// 			settings: {
	// 				slidesToShow: 2
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 525,
	// 			settings: {
	// 				slidesToShow: 1
	// 			}
	// 		}
	// 	]
	// });

	// FancyBox Video
	// $("[data-fancybox]").fancybox({
	// 	youtube: {
	// 		controls: 0,
	// 		showinfo: 0
	// 	},
	// 	vimeo: {
	// 		color: "f00"
	// 	}
	// });

	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$(".scroll-to-top").fadeIn();
		} else {
			$(".scroll-to-top").fadeOut();
		}
	});

	$(".scroll-to-top").on("click", function () {
		$("body,html").animate(
			{
				scrollTop: 0
			},
			500
		);
		return false;
	});

	$(window).on("load", function () {
		(function ($) {
			handlePreloader();
		})(jQuery);
	});
})(window.jQuery);
