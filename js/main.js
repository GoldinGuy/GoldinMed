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

	if ($(".scroll-to-target").length) {
		$(".scroll-to-target").click("click", function () {
			var target = $(this).attr("data-target");
			$("html, body").animate(
				{
					scrollTop: $(target).offset().top
				},
				1000
			);
		});
	}

	if ($(".wow").length) {
		var wow = new WOW({
			boxClass: "wow",
			animateClass: "animated",
			offset: 0,
			mobile: false,
			live: true
		});
		wow.init();
	}

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
})(window.jQuery);
