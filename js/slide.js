jQuery(function($) {
	$(".fade-img li:not(:first-child)").hide();
	
	setInterval(function(){
		$(".fade-img li:first-child").fadeOut(1500).next("li").fadeIn(1500).end().appendTo(".fade-img");
    },4000);
    
	
	$(".fade-img").one("click", function() {
		$(".fade-img").append("<li id='dog'><img src='./img/add001.jpg' /></li>");
		$("#dog").hide();
		
		
	});
	
	$(document).on("click","#dog", function() {
		alert("クリック");
	});
});




