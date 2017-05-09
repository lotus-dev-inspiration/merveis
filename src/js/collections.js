$(function(){
	var collect_img_item = $(".content_item");
	collect_img_item.hover(
		function() {
			$(this).find("img").attr("src","dist/img/006.jpg");
			$(this).find(".price").after("<a href='col_detailed.html' class='color col_blue'></a>");
			$(this).find(".price").remove();
		},
		function() {
			$(this).find("img").attr("src","dist/img/005.jpg");
			$(this).find(".color").after("<p class='price'>1300 грн</p>");
			$(this).find(".color").remove();
		}
		);

	var items_block = '<div class="items_block"><div class="content_item"><div class="item_img"><a href="#"><img src="dist/img/005.jpg"></a></div><div class="item_info"><p>Square T-Shirt Mint</p><p class="price">1300 грн</p></div></div><div class="content_item"><div class="item_img"><a href="#"><img src="dist/img/005.jpg"></a></div><div class="item_info"><p>Square T-Shirt Mint</p><p class="price">1300 грн</p></div></div><div class="content_item"><div class="item_img"><a href="#"><img src="dist/img/005.jpg"></a></div><div class="item_info"><p>Square T-Shirt Mint</p><p class="price">1300 грн</p></div></div></div>';

	var collect_show_more = $(".show_more");
	collect_show_more.on("click", function() {
		collect_show_more.before(items_block);
	});

	var count = 0;

	$(".filter").on("click", function() {
		if(count%2 == 0) {
			$(".filter_items").show(1000);
			count++;
		} else {
			$(".filter_items").hide(1000);
			count++;
		}
	});
});


