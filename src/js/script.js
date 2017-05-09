$(function(){

  // BUY
  $('.basket_buy').on('click',function(){
  	$('.popup').css('display','block');
  });
  $('.close').on('click',function(){
  	$('.popup').css('display','none');
  });
  $('.butdg').on('click',function(){
  	$('.popup').css('display','none');
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
    	$('.hide_box').hide();
    	$('.size_grid').show();
    });
    $('.hide_button').on('click',function(){
    	$('.hide_box').show();
    	$('.size_grid').hide();
    });
});