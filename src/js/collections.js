$(function(){


			// filter_aside_show_function //

			if($(document).width()<=1000) {
				window.onscroll = function() {
					$("aside").hide(500);
				}
				$(".filter, .filter_button_link").on("click", function() {
					if($("aside").css("display") === "none") {
						$(".filter_items").slideToggle();
					} else {
						$("aside").slideToggle();
						$(".filter_items").slideToggle();
					}
				});
			} else {
				$(".filter, .filter_button_link").on("click", function() {
					$(".filter_items").slideToggle();
				});
			}

			$(".categories, aside").on("click", function() {
				if($(".filter_items").css("display") === "none") {
					$("aside").slideToggle();
				} else {
					$(".filter_items").slideToggle();
					$("aside").slideToggle();
				}
			});


			// end_of_filter_aside_show_function //

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

		});

