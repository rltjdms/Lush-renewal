
$(function() {

		$(".ham-btn").on("click", function() {
			$(this).toggleClass("active");
			$("nav").toggleClass("on");
		});

		$(".navi-list li").on("mouseenter", function() {
			$(this).addClass("active");
		})
		$(".navi-list li").on("mouseleave", function() {
			$(this).removeClass("active");
		})

		$(".menu-title").on("click", function() {
			$(".menu-title").not($(this).parent()).removeClass("on");
			$(this).parent().toggleClass("on");
			$(".depth-box").not($(this).siblings(".depth-box")).stop().slideUp();
			$(this).siblings(".depth-box") .stop().slideToggle();
		});
		$(".menu-tit").on("click", function() {
			console.log($(this).parent(), "ttt")
			$(".depth").not($(this).parent()).removeClass("on");
			$(this).parent().toggleClass("on");
			$(".sub01").not($(this).siblings(".sub01")).removeClass("on");
			$(this).siblings(".sub01") .stop().toggleClass("on");
		});


		let subteb = $(".sub-teb li");

		subteb.eq(0).addClass("active");

		subteb.on("click", function() {
			$(this).addClass("active");
			subteb.not(this).removeClass("active");
		});

		// let subTeb = $(".sub-teb li a");
		// subTeb.on("click", function (e) {
		// 	e.preventDefault();
		// 	//let teBox = techContent.index();
		// 	let activeIndex = $(this).index();
		// 	//console.log("activeIndex" + activeIndex);
		  
		// 	techwrapperSwiper.slideTo(activeIndex);
		//   });

		// function subTebActive(idx) {
		
		// 	let subTebIDx = subTeb.eq(idx);
		// 	subTebIDx.addClass("active").siblings().removeClass("active");
		// }

})
		
