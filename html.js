$(function() {
	var stky      =	$('<div></div>', { addClass: "stky",});	// 付箋全体
	var stky_head =	$("<div></div>", { addClass: "stky_head",});					// ヘッダ
	var stky_body =	$("<div></div>", { addClass: "stky_body",});					// 本体（テキスト表示/編集）
	var stky_foot =	$("<div></div>", { addClass: "stky_foot",});					// フッタ
	var add_btn =	$("<div></div>", { addClass: "add_btn",});						// [ボタン]追加
	var cls_btn =	$("<div></div>", { addClass: "close_btn",});					// [ボタン]最小化
	var del_btn =	$("<div></div>", { addClass: "delete_btn",});					// [ボタン]削除
	stky.css({'top':'10px','left':'645px'});

	$('body').append(
		stky
		.append(stky_head
			.prepend(add_btn)
			.append(cls_btn)
			.append(del_btn)
		)
		.append(stky_body)
		.append(stky_foot)
	);

});
