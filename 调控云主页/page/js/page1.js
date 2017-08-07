// JavaScript Document
$(document).ready(function(){
	set_obj_wb();	
	$('.content2').contextMenu('myMenu1', 
      {
		   menuStyle: {
        // border: '2px solid #000'
		width:'150px',
         border: '1px solid #d1d2d2',
       },
       //菜单项样式
      itemStyle: {
         fontFamily : 'verdana',
         backgroundColor : '#ffffff',
         color: '#989898',
         border: 'none',
         padding: '10px'
       },
       //菜单项鼠标放在上面样式
      itemHoverStyle: {
         color: '#989898',
         backgroundColor: '#f1f8fc',
         border: 'none'
       },
           bindings: 
           {
             'open': function(t) {
               
             },
             'email': function(t) {
               
             },
             'save': function(t) {
               
             },
             'delete': function(t) {
              
             }
           }
     });	
});
window.onresize=set_obj_wb;
function set_obj_wb(){
	var bodyWidth=$(window).width();
	var bodyHeight=$(window).height();
	
	$(".container").width(bodyWidth);
	$(".top_area").width(bodyWidth-20);
	
	$(".top_left").width((bodyWidth-20-10)*50/100);
	$(".top_right").width((bodyWidth-20-10)*50/100);
	$(".title").width((bodyWidth-20-10)*50/100-2);
	$(".content").width((bodyWidth-20-10)*50/100-2);
		
	$(".center_area").width(bodyWidth-20);
	$(".title2").width(bodyWidth-20-2);
	$(".content2").width(bodyWidth-20-2);
	
	$(".bottom_area").width(bodyWidth-20);
	$(".content3").width(bodyWidth-20-2);
	
	$(".btn_bg").width((bodyWidth-20-2)*0.8/5);
	
	$(".btn_same").click(function(){
		$(this).addClass("selected");
		$(this).siblings(".btn_same").removeClass("selected");
	});
}