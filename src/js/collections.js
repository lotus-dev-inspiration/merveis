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
	var collect_count = 0;

	$(".filter").on("click", function() {
		if(collect_count%2 == 0) {
			$(".filter_items").show(1000);
			collect_count++;
		} else {
			$(".filter_items").hide(1000);
			collect_count++;
		}
	});

	// end_of_filter_show_function //

	// search_function //


	$(".img_hide").on("click", function() { 
		$("#search_input").show(2000); 
		$(this).css("display","none");
		$(".search").css({
			"right":"13%"
		});
	});

	$("search_not_out").on("click", function() { 
		e.stopPropagation();
	});


	$(".main, .menu, .logo, footer").on("click", function() {
		$("#search_input").hide(2000);
		$(".search").css("right","7%");
		$(".img_hide").css("display","block");
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

		if(collect_content_item.length == i) {
			$(".show_more").remove();
		}
	});

	// end_of_show_more_function //
});

