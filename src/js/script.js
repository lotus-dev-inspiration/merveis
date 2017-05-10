$(function(){
  
  // BUY
  $('.basket_buy').on('click',function(){
  	$('.popup').show(500);
  });
  $('.close').on('click',function(){
  	$('.popup').hide(500);
  });
  $('.butdg').on('click',function(){
  	$('.popup').css('display','none');
  });

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
    });
    $('.hide_button').on('click',function(){
    	$('.hide_box').show(1000);
    	$('.size_grid').hide(1000);
    });
});