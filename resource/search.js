var searchInput = document.getElementById("searchbox");

const searchGoogle = document.getElementById("google");

const searchBing = document.getElementById("bing");

const searchWP = document.getElementById("wikipedia");

function update() {
  var searchInput = document.getElementById("searchbox").value;
}

searchGoogle.onclick = function() {
  update()
  window.location.href("https://google.com/search?q=" + searchInput);
};

searchBing.onclick = function() {
  update()
  window.location.href("https://bing.com/search?q=" + searchInput);
};

searchWP.onclick = function() {
  update()
  window.location.href("https://en.wikipedia.org/w/index.php?title=Special:Search&search=" + searchInput);
}