$(function(){

	// change_img_function //

	// var collect_img_item = $(".content_item");
	// collect_img_item.hover(
	// 	function() {
		// 		$(this).find("img").attr("src","dist/img/006.jpg");
		// 	},
		// 	function() {
			// 		$(this).find("img").attr("src","dist/img/005.jpg");
			// 	}
			// 	);

			// end_of_change_img_function //

			// filter_show_function //

			$(".filter, .filter_button_link").on("click", function() {
				// if(collect_count%2 == 0) {
				// 	$(".filter_items").show(1000);
				// 	collect_count++;
				// } else {
				// 	$(".filter_items").hide(1000);
				// 	collect_count++;
				// }
				if($("aside").css("display") === "none") {
					$(".filter_items").slideToggle();
				} else {
					$("aside").slideToggle();
					$(".filter_items").slideToggle();
				}
			});

			// end_of_filter_show_function //

			// search_function //


			$(".img_hide").on("click", function() {  
				$(this).css("display","none");
				if($(document).width()>800) {
					$("#search_input").show(2000);
					$(".search").css("right","13%");
				} else if($(document).width()<500) {
					$("#search_input").show(1000);
					$(".logo").hide(1000);
				} else {
					$("#search_input").show(2000);
				}
				
			});

			$("search_not_out").on("click", function() { 
				e.stopPropagation();
			});


			$(".main, .menu, .logo, footer").on("click", function() {
				$(".img_hide").css("display","block");
				if($(document).width()>800) {
					$(".search").css("right","7%");
					$("#search_input").hide(2000);
				} else if($(document).width()<500) {
					$(".logo").show(1000);
					$("#search_input").hide(1000);
				} else {
					$("#search_input").hide(2000);
				}
			});

			// end_of_search_function //

			// show_more_function //

			var collect_content_item = $(".content_item");

			var i = 9;

			for(; i<collect_content_item.length; i++) {
				$(collect_content_item[i]).css("display","none");
			}

			i = 9;


			$(".show_more").on("click", function() {
				for(var j=0; j<3; j++) {
					$(collect_content_item[i]).css("display","inline-block");
					i++;
				}

				if(collect_content_item.length <= i) {
					$(".show_more").remove();
				}
			});

			// end_of_show_more_function //

			// show_menu_function //

			$(".menu_sign, .cross_sign").on("click",function() {
				$(".menu" ).slideToggle( "slow", function() {
				});
			});

			// end_of_show_menu_function //

			// show_categories_function //
			if($(document).width()<=1000) {
				$(".categories, aside").on("click", function() {
					if($(".filter_items").css("display") === "none") {
						$("aside").slideToggle();
					} else {
						$(".filter_items").slideToggle();
						$("aside").slideToggle();
					}
				});
			}

			if($(document).width()<=1000) {
				window.onscroll = function() {
					$("aside").hide(500);
				}
			}

			// end_of_show_categories_function //
		});

