var searchInput = document.getElementById("searchinput").value;

const searchGoogle = document.getElementById("google");

const searchBing = document.getElementById("bing");

searchGoogle.onclick = function () {
  searchInput = document.getElementById("searchinput").value;
  
  if (searchInput == null || searchInput == "undefined") {
    document.getElementById("errortext").innerText = "Whoops, an error occured!";
  } else {
    window.location.replace("https://google.com/search?q=" + searchInput);
  };
};

searchBing.onclick = function () {
  searchInput = document.getElementById("searchinput").value;
  window.location.replace("https://bing.com/search?q=" + searchInput);
};