function oyaFunc() {
	alert('親ページの関数が実行されました。');
}

$(function() {
	$(document).on('click', '#oya button', function() {
		document.getElementById('child-frame').contentWindow.koFunc();
	});
});