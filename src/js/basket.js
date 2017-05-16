$(function() {

	// check_goods_function //

	function checkGoods() {
		var basket_good_item = $(".good_item");

		if(!basket_good_item.length) {
			$(".empty_basket").css("display","block");
			$(".main").css("min-height","280px");
			$(".items_buy").remove();
		}
	}

	// end_of_check_goods_function // 

	// delete+_item_function //
	var basket_item_cross = $(".item_cross");
	basket_item_cross.on("click", function() {
		$(this).parent().parent().remove();
		checkGoods();
	});
	// end_of_delete_item_function //


	// pay_form_function //

	$(".pay a").on("click", function() {
		$(".popup").css("display","block");
	});

	$(".close").on("click", function() {
		$(".popup").css("display","none");
	});
	// end_of_pay_form_function //
});