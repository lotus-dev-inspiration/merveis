$(function(){
  
  // BUY
  $('.basket_buy').on('click',function(){
  	$('.popup').show(500);
  });
  $('.close').on('click',function(){
  	$('.popup').hide(500);
  });
  // $('.').on('click',function(){
  // 	$('.popup').css('display','none');
  // });


  // FIXED
   $('.link_block_fixed').on('click',function(){
    $('.fixed_menu').toggle(1000);
  });
    $('.back').on('click',function(){
    $('.fixed_menu').hide(500);
  });
  // SHARE
  $('.share').on('mouseover',function(){
  	$('.share_text').hide();
  	$('.insta').show();
  	$('.pinterest').show();
  	$('.vkontakte').show();
  	$('.facebook').show();
  });
    
   $('.share').on('mouseout',function(){
  	$('.share_text').show();
  	$('.insta').hide();
  	$('.pinterest').hide();
  	$('.vkontakte').hide();
  	$('.facebook').hide();
  });

   // SIZE
    $('.not_sure').on('click',function(){
    	$('.hide_box').hide(1000);
    	$('.size_grid').show(1000);
      $('.describsion').css('margin-left','80px');
    });
    $('.hide_button').on('click',function(){
    	$('.hide_box').show(1000);
    	$('.size_grid').hide(1000);
      $('.describsion').css('margin-left','0');
    });
    
  //   var $length_area = $(".wrapper").width();
  //   var $textarea = $("textarea");
  //   function textArea(){
  //   if($length_area <= 1000 ){
  //       $("textarea").attr("cols","40");
  //   }
  // };
  //   setInterval(textArea,5000);

  var $text_1=$('.one');
  var $text_2=$('.two');
  var $text_3=$('.three');
  var $text_4=$('.four');
  

  $('.link1').on('click',function(e){
    e.preventDefault();
    $text_1.show(2000);
    $text_3.hide(2000);
    $text_2.hide(2000);
    $text_4.hide(2000);
  });
  
  $('.link2').on('click',function(e){
    e.preventDefault();
    $text_2.show(2000);
    $text_3.hide(2000);
    $text_1.hide(2000);
    $text_4.hide(2000);
  });
  $('.link3').on('click',function(e){
    e.preventDefault();
    $text_3.show(2000);
    $text_1.hide(2000);
    $text_2.hide(2000);
    $text_4.hide(2000);
  });
  $('.link4').on('click',function(e){
    e.preventDefault();
    $text_4.show(2000);
    $text_3.hide(2000);
    $text_2.hide(2000);
    $text_1.hide(2000);
  });

  var $links=$('.menu_right a');
  var handler=function(e){
    var $link=$(this).siblings('.submenu');
    e.preventDefault();
    $link.slideToggle();
  };
 


  $links.bind('click',handler);

});