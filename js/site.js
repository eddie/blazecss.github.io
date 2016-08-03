(function () {
	var headings = document.querySelectorAll('.c-heading[id]');
	for (var i = 0; i < headings.length; i++) {
		var heading = headings[i];
		var id = heading.getAttribute('id')
		heading.innerHTML = heading.innerHTML + ' <a href="#' + id + '" class="c-link fa fa-link"></a>';
	}
})()