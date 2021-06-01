function openNav() {
  document.getElementById("openbtn").style.display = "none";
  document.getElementById("closebtn").style.display = "initial";
  document.getElementById("sidenav").style.width = "160px";
  document.getElementById("main").style.marginLeft = "160px";
}

function closeNav() {
  document.getElementById("closebtn").style.display = "none";
  document.getElementById("openbtn").style.display = "initial";
  document.getElementById("sidenav").style.width = "0px";
  document.getElementById("main").style.marginLeft = "0px";
}
