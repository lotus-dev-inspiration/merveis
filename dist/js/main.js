$(function(){$(".content_item").hover(function(){$(this).find("img").attr("src","dist/img/006.jpg"),$(this).find(".price").after("<a href='col_detailed.html' class='color col_blue'></a>"),$(this).find(".price").remove()},function(){$(this).find("img").attr("src","dist/img/005.jpg"),$(this).find(".color").after("<p class='price'>1300 грн</p>"),$(this).find(".color").remove()});var i=$(".show_more");i.on("click",function(){i.before('<div class="items_block"><div class="content_item"><div class="item_img"><a href="#"><img src="dist/img/005.jpg"></a></div><div class="item_info"><p>Square T-Shirt Mint</p><p class="price">1300 грн</p></div></div><div class="content_item"><div class="item_img"><a href="#"><img src="dist/img/005.jpg"></a></div><div class="item_info"><p>Square T-Shirt Mint</p><p class="price">1300 грн</p></div></div><div class="content_item"><div class="item_img"><a href="#"><img src="dist/img/005.jpg"></a></div><div class="item_info"><p>Square T-Shirt Mint</p><p class="price">1300 грн</p></div></div></div>')});var e=0;$(".filter").on("click",function(){e%2==0?($(".filter_items").show(1e3),e++):($(".filter_items").hide(1e3),e++)})}),function(i){i.fn.SimSlider=function(e){var e=e||{};return this.each(function(t,n){var o,s,c,d,r=i.extend({autoplay:!0,item:".ss-item",next:".ss-next",prev:".ss-prev",dots:".ss-dot",dotActClass:"active",delay:4e3,speed:800,onAfterInit:function(i,e,t,n){return!1},onBeginAnimate:function(i,e){return!1},onEndAnimate:function(i,e){return!1}},e),a=0,l=i(n),f=!1,u=!1;if(s=i(r.item,l),0==s.length)return void(window.console&&window.console.log?console.log("Sim Slider: slides not found!"):window.status&&(window.status="Sim Slider: slides not found!"));var h=function(){return!f&&(v(a+1),!1)},m=function(){return!f&&(v(a-1,-1),!1)},p=function(){if(f)return!1;var e=i(this).attr("href").split("-");if(e.length>1){if((e=parseInt(e[1]))==a)return!1;s[e]&&v(e)}return!1},v=function(e,t){if(!f){clearTimeout(o),t=t||1,e>s.length-1&&(e=0),e<0&&(e=s.length-1),f=!0;var n=c*t;i(s[e]).css({left:n}),d.length&&i(d).removeClass(r.dotActClass),r.onBeginAnimate&&(r.onBeginAnimate(s[e],"hidden"),r.onBeginAnimate(s[a],"visible")),i(s[a]).animate({left:-1*n},r.speed),i(s[e]).animate({left:0},r.speed,function(){d.length&&i(d[e]).addClass(r.dotActClass),r.onEndAnimate&&(r.onEndAnimate(s[e],"visible"),r.onEndAnimate(s[a],"hidden")),f=!1,a=e,r.autoplay&&!u&&(o=setTimeout(h,r.delay+r.speed))})}};c=i(s[0]).outerWidth();for(var $=1;$<s.length;$++)i(s[$]).css("left",-1*(c+5));var g=i(r.next,l),_=i(r.prev,l);g.length&&_.length&&(i(g).on("click",h),i(_).on("click",m)),d=i(r.dots,l),d.length&&(d.on("click",p),i(d[0]).addClass(r.dotActClass)),r.autoplay&&(o=setTimeout(h,r.delay+r.speed),s.hover(function(){clearTimeout(o),u=!0},function(){u=!1,o=setTimeout(h,r.delay+r.speed)})),r.onAfterInit&&r.onAfterInit(s,g,_,d)})},i.SimSlider=i.fn.SimSlider}(jQuery),$(function(){$(".basket_buy").on("click",function(){$(".popup").show(500)}),$(".close").on("click",function(){$(".popup").hide(500)}),$(".butdg").on("click",function(){$(".popup").css("display","none")}),$(".link_block_fixed").on("click",function(){$(".fixed_menu").toggle(1e3)}),$(".back").on("click",function(){$(".fixed_menu").hide(500)}),$(".share").on("mouseover",function(){$(".share_text").hide(),$(".insta").show(),$(".pinterest").show(),$(".vkontakte").show(),$(".facebook").show()}),$(".share").on("mouseout",function(){$(".share_text").show(),$(".insta").hide(),$(".pinterest").hide(),$(".vkontakte").hide(),$(".facebook").hide()}),$(".not_sure").on("click",function(){$(".hide_box").hide(1e3),$(".size_grid").show(1e3)}),$(".hide_button").on("click",function(){$(".hide_box").show(1e3),$(".size_grid").hide(1e3)})});