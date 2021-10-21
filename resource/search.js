var searchInput = document.getElementById("searchbox");

const searchGoogle = document.getElementById("google");

const searchBing = document.getElementById("bing");

searchGoogle.onclick = function() {
  var searchInput = document.getElementById("searchbox").value
  window.location.replace("https://google.com/search?q=" + searchInput);
};

searchBing.onclick = function() {
  var searchInput = document.getElementById("searchbox").value
  window.location.replace("https://bing.com/search?q=" + searchInput);
};
