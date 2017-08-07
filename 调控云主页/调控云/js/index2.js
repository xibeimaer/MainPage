// JavaScript Document
$(document).ready(function(){
	set_obj_wb();	
	$(".tab").click(function(){
		$(this).css("color","#3e92f0");	
		$(this).siblings(".tab").css("color","#5b5b5b");
		$(this).addClass("selected");
		$(this).siblings(".tab").removeClass("selected");	
	});	
	$(".tab2").click(function(){
		$(this).css("color","#3e92f0");	
		$(this).siblings(".tab2").css("color","#5b5b5b");
		$(this).addClass("selected3");
		$(this).siblings(".tab2").removeClass("selected3");	
	});	
	$(".top_1").click(function(){
		$(this).addClass("selected2");
		$(this).siblings().removeClass("selected2");
		
		$(".center_left_bottom").children().removeClass("selected4");
		$(".center_left_bottom").children().eq($(this).index()).addClass("selected4");
	});	
});
window.onresize=set_obj_wb;
function set_obj_wb(){
	var bodyWidth=$(window).width();
	var bodyHeight=$(window).height();
	
}