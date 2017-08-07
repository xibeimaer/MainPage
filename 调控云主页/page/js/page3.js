// JavaScript Document
$(document).ready(function(){
	set_obj_wb();		
});
window.onresize=set_obj_wb;
function set_obj_wb(){
	var bodyWidth=$(window).width();
	var bodyHeight=$(window).height();
	
	$(".container").width(bodyWidth);
	
	$(".one_area").width(bodyWidth-20-2);
	$(".two_area").width(bodyWidth-20-2);
	$(".three_area").width(bodyWidth-20-2);
	
	$(".title").width(bodyWidth-20-2);
	$(".content").width(bodyWidth-20-2);
	
	$(".btn_bg").width((bodyWidth-20-2)*0.8/4);
}