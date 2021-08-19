var can = document.getElementById('canvas1');
var ctx = can.getContext('2d');

function input() {
  var src = document.getElementById("input").textContent;
}

function create() {
  var img = new Image();
  img.onload = function() {
    ctx.drawImage(img, 0, 0);
  }
  img.src = "http://upload.wikimedia.org/wikipedia/commons/d/d2/Svg_example_square.svg";
}
