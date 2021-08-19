var can = document.getElementById('canvas1');
var ctx = can.getContext('2d');

function input() {
  var source = document.getElementById("input").textContent;
}

function create() {
  var img = new Image();
  img.onload = function() {
    ctx.drawImage(img, 0, 0);
  }
  img.src = source;
}
