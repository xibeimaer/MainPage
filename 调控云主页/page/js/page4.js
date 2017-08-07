// JavaScript Document
$(document).ready(function(){
	set_obj_wb();		
});
window.onresize=set_obj_wb;
function set_obj_wb(){
	var bodyWidth=$(window).width();
	var bodyHeight=$(window).height();
	
	$(".container").width(bodyWidth);
	$(".content_area").width(bodyWidth-20);
	$(".title").width(bodyWidth-20-2);
	$(".content").width(bodyWidth-20-2);
	$(".key_test").width((bodyWidth-20-2)*0.8);
}