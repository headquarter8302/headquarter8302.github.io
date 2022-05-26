// Prevent cookies to being set, at all.
document.__defineGetter__("cookie", function() { return '';} );
document.__defineSetter__("cookie", function() {} );

function changeTheme() {
    let isChanged = false;
    if (isChanged) {
        document.getElementById('html').style.filter = "initial";
        isChanged = false;
    } else {
        document.getElementById('html').style.filter = "invert\(1\) hue-rotate\(180deg\)";
        isChanged = true;
    }
}

console.log(
        "%cWhatcha doin here?",
        "color:cyan;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;font-size:3rem;font-weight:bold"
      );
