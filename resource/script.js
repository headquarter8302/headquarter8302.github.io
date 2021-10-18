// Prevent cookies to being set, at all.
document.__defineGetter__("cookie", function() { return '';} );
document.__defineSetter__("cookie", function() {} );

const remember = document.getElementById("themechanger");

console.log(
        "%cHello! :)",
        "color:red;font-family:monospace;font-size:3rem;font-weight:bold"
      );

      function changetheme(){
        if (remember.checked == 1){
          document.getElementsByTagName("html").style.filter = "invert(1)" ;
        } else {
          document.getElementsByTagName("html").style.filter = "none"
        }
      }