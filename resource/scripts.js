function openNav() {
  document.getElementById("sidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("togglebtn").innerHTML = "X";
  document.getElementById("openbtn").onclick = "closeNav()";
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("togglebtn").innerHTML = "☰";
  document.getElementById("togglebtn").onclick = "openNav()";
}
