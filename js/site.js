(function () {
  var headings = document.querySelectorAll('.c-heading[id]');
  for (var i = 0; i < headings.length; i++) {
    headings[i].innerHTML = headings[i].innerHTML + ' <a href="#' + headings[i].getAttribute('id') + '" class="c-link fa fa-link"></a>';
  }

  var client = algoliasearch('OR1F7EOMDJ', '30a5e5272fc8cf7cc47aadeeb6aec522');
  var index = client.initIndex('pages');

  var elemSearchBox = document.querySelector('#q');
  var elemSearchResults = document.querySelector('#search-results');
  elemSearchBox.oninput = search;

    function search() {
    if (elemSearchBox.value === '') {
      return elemSearchResults.innerHTML = '';
    }
    index.search(elemSearchBox.value, function (err, content) {
      elemSearchResults.innerHTML = '';
      if (content.hits) {
        return content.hits.forEach(function (hit) {
          var item = document.createElement('li');
          item.setAttribute('class', 'c-card__item');
          item.textContent = hit.title;
          item.onclick = function () {
            window.location.href = hit.url;
          };
          elemSearchResults.appendChild(item);
        });
      }
    });
  };
})();
