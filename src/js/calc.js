/**
 * Created by lecosson on 16.10.15.
 */

(function($){ 
	$(function() {

	var hslider = $( "#hsize_wrapper .cal_slider" ).slider({
		orientation: "horizontal",
		range: "min",
		min: 0,
		max: 4000,
		value: 1500,
		slide: function( event, ui ) {
				$( "#hsize_wrapper INPUT" ).val( ui.value );
				$( "#hsize_wrapper .cal_slider" ).parent().css({ 'margin': '', 'position': '', 'overflow': '', 'height': ''});
				$( "#hsize_wrapper .cal_slider" ).css({'margin-top':'', 'margin': '', 'position': '', 'overflow': '', 'height': ''});
		}
	});
	$( "#hsize_wrapper INPUT" ).val( $( "#hsize_wrapper .cal_slider" ).slider( "value" ) );

	$( "#hsize_wrapper INPUT" ).change( function(v){hslider.cal_slider( 'value', $( "#hsize_wrapper INPUT").val() );});

})
})(jQuery);
;