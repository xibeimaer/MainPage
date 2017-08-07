// JavaScript Document
$(document).ready(function() {
   set_obj_wb();
   $(".spliter_area").find("img").click(function(){
	   		if($(".left_area").css("display")=="block")
				{
					$(".left_area").hide();
					set_obj_wb();
					$(this).attr("src","image/l.png");
				}
				else
				{
					$(".left_area").show();
					set_obj_wb();
					$(this).attr("src","image/r.png");
				}	
	   });
  /* $(".first_menu_title").click(function(){
	   		$(this).parents(".first_level").siblings().find(".first_level_title").css("font-size","12px");
	   		$(this).find(".first_level_title").css("font-size","14px");
	   		if($(this).next().hasClass("second_level"))
			{
				$(this).next().show();
			}
	   });*/
	$(".second_title").click(function(){
			$(this).siblings().css("background","none").css("color","#000");
			$(this).css("background","url(image/left_clicked.jpg) repeat-y").css("color","#FFF");
	})
	
	$(".first_menu_title").click(function(){
			$(this).parent().siblings().children(".first_menu_title").css("background","#e0eef5");
			$(this).parent().siblings().children(".first_menu_title").children(".first_level_title").css("color","#1d4a96");
			$(this).css("background","#3a8dda");
			$(this).children(".first_level_title").css("color","#fff");
	})
	////////////////////弹出框效果
	$(".picture").mouseover(function(){
		$(".nav").show();
	});
	$(".picture").mouseout(function(){
		$(".nav").hide();
	});	
	////////////////////鼠标滑过效果
	$(".nav ul li").mouseover(function(){
		$(this).addClass("round");
	});
	$(".nav ul li").mouseout(function(){
		$(this).parent().children().removeClass("round");
	});
});
function set_obj_wb()
{
	var body_w=$(window).width();
	var body_h=$(window).height();
	$(".top_area").width(body_w);
	$(".center_area").width(body_w);
	$(".center_area").height(body_h-64-25);
	$(".bottom_area").width(body_w);
	$(".left_area").height(body_h-64-25);
	$(".left_content").height(body_h-64-25-40);
	$(".right_area").height(body_h-64-25)
	$(".spliter_area").height(body_h-64-25);
	if($(".left_area").css("display")=="block")
	{
		$(".right_area").width(body_w-203-10);
	}
	else
	{
		$(".right_area").width(body_w-10);
		//alert("sss");
	}
	$(".spliter_area").find("img").css("margin-top",(body_h-64-25)/2);
}
window.onresize=set_obj_wb;
