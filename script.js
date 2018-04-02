// JavaScript Document
var $san_pham=[
		{type:"ap_trong",brand:'doll_eyes', brand_showname: "Doll Eyes", content:'nội dung đơn lẻ (áp tròng) 1'},
		{type:"ap_trong",brand:'seed_vietnam', brand_showname: "Seed Việt Nam", content: 'nội dung đơn lẻ (áp tròng)  2'},
		{type:"ap_trong",brand:'angel_eyes', brand_showname: "Angel Eyes", content: 'nội dung đơn lẻ (áp tròng)  3'},
		{type:"ap_trong",brand:'circles_shop', brand_showname: "Circle’s Shop", content: 'nội dung đơn lẻ (áp tròng)  4'},
		{type:"ap_trong",brand:'vassen', brand_showname: "Vassen", content: 'nội dung đơn lẻ (áp tròng) 5'},
		{type:"ap_trong",brand:'kabi_store', brand_showname: "Kabi Store", content: 'nội dung đơn lẻ (áp tròng) 6'},
		{type: 'kinh',brand:'rayban', brand_showname: 'Ray-ban', content: 'nội dung đơn lẻ (kính) 1'},
		{type: 'kinh',brand:'oakley', brand_showname: 'Oakley', content: 'nội dung đơn lẻ (kính) 2'},
		{type: 'kinh',brand:'dolce_gabbana', brand_showname: 'Dolce &amp; Gabbana', content: 'nội dung đơn lẻ (kính) 3'},
		{type: 'kinh',brand:'bvlgari', brand_showname: 'BVLgari', content: 'nội dung đơn lẻ (kính) 4'},
		{type: 'kinh',brand:'burberry', brand_showname: 'Burberry', content: 'nội dung đơn lẻ (kính) 5'},
		{type: 'kinh',brand:'versace', brand_showname: 'Versace', content: 'nội dung đơn lẻ (kính) 6'}
		 ]; 
		 
		 //script của trang sản phẩm 			 
function noidungsanpham(element){
	"use strict";
	//alert(element.id);
	var strHtml="";
	var strID=element.id;
	var aIndex= strID.substr(1);
	strHtml += $san_pham[aIndex].content;
	document.getElementById("product_content").innerHTML=strHtml;
	}

(function ($){
	"use strict";
     $(document).ready(function() {
         $('nav.secondary_header ul div a').click(function(){
			 var strHtml='<nav class ="vertical"><ul id="list">';
			 var strID1="";
			 var i;
			 var strID=$(this).attr('id');
			 for(i=0; i<$san_pham.length; i++)
			 {
				if(strID===$san_pham[i].type)
					{
						strID1 = "1";
						strID1 += i;
						strHtml += '<li onclick="noidungsanpham(this)" id="';
						strHtml += strID1;
						strHtml += '"><a href="#">';
						strHtml += $san_pham[i].brand_showname;
						strHtml +=	'</a></li>';
					} 
			}	
			 strHtml += '</ul></nav>';
			 document.getElementById("product_menu").innerHTML=strHtml;
			 });
	  });
 })(jQuery);
 
// script của trang liên hệ tự viết hehe


function lien_he()
{
	"use strict";
document.getElementById("menu_va_noidung").innerHTML='<div id="lien_he_button"><input class="lien_he_button" type="button" value="Cửa hàng 1" onClick="show1()"/><center style="padding-top: 10px; font-size: 20px; color: deeppink;">APTECH ĐỘI CẤN</center><br><br><input class="lien_he_button" type="button" value="Cửa hàng 2" onClick="show2()"/><center style="padding-top: 10px; font-size: 20px; color: deeppink;">APTECH KIM ĐỒNG</center></div><div id="lien_he_map"><div id="lien_he_map_1"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9307701538314!2d105.81663121457862!3d21.035455885994697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab0d6eedb3b9%3A0xe096499f4f1f76be!2sAPTECH!5e0!3m2!1svi!2s!4v1521376416883" width="100%" height="290px" frameborder="0" style="border:0" ></iframe></div><div id="lien_he_map_2"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.2150296714467!2d105.84092161457755!3d20.98401588602264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac428c3336e5%3A0xb7d4993d5b02357e!2sAptech+Computer+Education!5e0!3m2!1svi!2s!4v1521376869766" width="100%" height="290px" frameborder="0" style="border:0" allowfullscreen></iframe></div></div>';
}

function show1()
{
	"use strict";
	document.getElementById("lien_he_map_1").style.display = "block";
	document.getElementById("lien_he_map_2").style.display = "none";
}

function show2()
{
	"use strict";
	document.getElementById("lien_he_map_1").style.display = "none";
	document.getElementById("lien_he_map_2").style.display = "block";
}
 
 

