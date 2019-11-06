jQuery(function($) {
	$("input[name='change']").click(function() {
    	// cssで文字色を赤に変更
		$(this).closest("label").css("color","red");
	});
});