// JavaScript Document
$(document).ready(function(){
	set_obj_wb();		
});
window.onresize=set_obj_wb;
function set_obj_wb(){
	var bodyWidth=$(window).width();
	var bodyHeight=$(window).height();
	
	$(".container").width(bodyWidth);
	$(".title").width(bodyWidth-20-2);
	$(".content").width(bodyWidth-20-2);
	
	$(".one_area").width(bodyWidth-20);
	$(".two_area").width(bodyWidth-20);
	$(".three_area").width(bodyWidth-20);
	$(".four_area").width(bodyWidth-20);

}