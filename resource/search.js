var searchInput = document.getElementById("searchbox");

const searchGoogle = document.getElementById("google");

const searchBing = document.getElementById("bing");

const searchWP = document.getElementById("wikipedia");

searchGoogle.onclick = function() {
    var searchInput = document.getElementById("searchbox").value;
  window.location.href("https://google.com/search?q=" + searchInput);
};

searchBing.onclick = function() {
    var searchInput = document.getElementById("searchbox").value;
  window.location.href("https://bing.com/search?q=" + searchInput);
};

searchWP.onclick = function() {
    var searchInput = document.getElementById("searchbox").value;
  window.location.href("https://en.wikipedia.org/w/index.php?title=Special:Search&search=" + searchInput);
}