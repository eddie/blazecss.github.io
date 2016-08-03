(function () {
	var headings = document.querySelectorAll('.c-heading[id]');
	for (var i = 0; i < headings.length; i++) {
		headings[i].innerHTML = headings[i].innerHTML + ' <a href="#' + headings[i].getAttribute('id') + '" class="c-link fa fa-link"></a>';
	}
})()