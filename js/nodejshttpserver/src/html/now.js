window.onload = function () {
	var now = document.getElementById("now");
	setInterval(function () {
		now.innerHTML = new Date();
	}, 100);
};