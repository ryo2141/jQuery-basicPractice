jQuery(function($) {
	$("#btnAdd1").on("click", function() {
		// テーブルの最終行をクローンしてテーブルの最後に追加する
		$("#tblForm1 tbody tr:last-child").clone(true).appendTo("#tblForm1 tbody");
 
		// 追加した行の値をクリアする
		$("#tblForm1 tbody tr:last-child input").val("");
	});
	
	var checkBox = "input[name='check[]']";
	$("#btnAdd2").on("click", function() {
		$(checkBox).prop("checked", true);
	});
	
	$("#btnAdd3").on("click", function() {
		$(checkBox).prop("checked", false);
	});
});