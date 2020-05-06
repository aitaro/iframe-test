function koFunc() {
	alert('iframe内の関数が実行されました。');
}

$(function() {
	$(document).on('click', '#ko button', function() {
		window.parent.oyaFunc();
	});
});