// Search function

var searchInput = document.getElementById("searchbox").value;

const searchGoogle = document.getElementById("google");

const searchBing = document.getElementById("bing");

const searchWP = document.getElementById("wikipedia");

const feelingLucky = document.getElementById("lucky");

searchGoogle.onclick = function () {
    var searchInput = document.getElementById("searchbox").value;
    window.location.href = "https://google.com/search?q=" + searchInput;
};

searchBing.onclick = function () {
    var searchInput = document.getElementById("searchbox").value;
    window.location.href = "https://bing.com/search?q=" + searchInput;
};

searchWP.onclick = function () {
    var searchInput = document.getElementById("searchbox").value;
    window.location.href = "https://en.wikipedia.org/w/index.php?title=Special:Search&search=" + searchInput;
}

feelingLucky.onclick = function () {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

// API for weather
fetch('https://api.weather.gov', {
    method: 'GET'
})
    .then(res => {
        if (res.ok) {
            console.log("SUCCESS LOADING WEATHER API")
        }
    },
        res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
