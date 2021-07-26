// Prevent cookies to being set, at all.
document.__defineGetter__("cookie", function() { return '';} );
document.__defineSetter__("cookie", function() {} );


console.log(
        "%cHello! :)",
        "color:red;font-family:monospace;font-size:3rem;font-weight:bold"
      );
