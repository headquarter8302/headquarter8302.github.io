const cursor = document.getElementById("cursor");
const links = document.querySelectorAll("a");

document.addEventListener("mousedown", () => {
  cursor.classList.add("clicked");
});

document.addEventListener("mouseup", () => {
  cursor.classList.remove("clicked");
});

links.forEach(function (e) {
  e.addEventListener("mouseover", function () {
    cursor.classList.add("link-hover");
  });

  e.addEventListener("mouseout", function () {
    cursor.classList.remove("link-hover");
  });
});

document.addEventListener("mousemove", function (e) {
  if (cursor.classList.contains("link-hover")) {
    cursor.style.transform = `translate(${e.clientX - 25}px, ${
      e.clientY - 25
    }px)`;
  } else {
    cursor.style.transform = `translate(${e.clientX - 10}px, ${
      e.clientY - 10
    }px)`;
  }
  cursor.style.display = "block";
});

console.log(
  "%cHey.",
  'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-size:3rem;font-weight:bold'
);
