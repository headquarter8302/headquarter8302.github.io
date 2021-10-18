// Prevent cookies to being set, at all.
document.__defineGetter__("cookie", function() { return '';} );
document.__defineSetter__("cookie", function() {} );

const remember = document.getElementById("themechanger");
const root = document.getElementsByTagName("html");

console.log(
        "%cHello! :)",
        "color:red;font-family:monospace;font-size:3rem;font-weight:bold"
      );

      function changetheme(){
        if (remember.checked == 1){
          root.style.filter = "invert(1)";
        } else {
          root.style.filter = "none";
        }
      }