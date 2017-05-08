$(function(){
	var collect_img_item = $(".content_item");
	collect_img_item.hover(
		function() {
			$(this).find("img").attr("src","dist/img/006.jpg");
		},
		function() {
			$(this).find("img").attr("src","dist/img/005.jpg");
		}
		);
});