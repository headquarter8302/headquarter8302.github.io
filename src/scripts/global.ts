console.log(
  "%cHey",
  "font-family:sans-serif;font-size:2em;background-color: rgb(12 32 32);padding:.25em",
);

/** Apply a copy-on-click function */
function applyCopyclick(elems: HTMLCollectionOf<HTMLElement>) {
  for (const element of elems) {
    element.addEventListener("click", () => {
      navigator.clipboard.writeText(element.innerText);
      window.alert("License text copied!")
    })
  }
}

class Cursor {
  /**
   * Description placeholder
   *
   * @static
   * @type {*}
   */
  static cursor: HTMLDivElement = document.getElementById("cursor")! as HTMLDivElement;

  static links = document.querySelectorAll("a");

  /**
   * The cursor class
   */
  constructor() {
    if (Cursor.cursor) {
      Cursor.handleClick();
      Cursor.linkHover();
      Cursor.handleMove();
    } else {
      console.warn("[Cursor] No cursor element!");
      return;
    }
  }

  /**
   * Description placeholder
   *
   * @static
   */
  static handleClick() {
    document.addEventListener("mousedown", () => {
      Cursor.cursor.classList.add("clicked");
    });

    document.addEventListener("mouseup", () => {
      Cursor.cursor.classList.remove("clicked");
    });
  }

  /**
   * Description placeholder
   *
   * @static
   */
  static linkHover() {
    Cursor.links.forEach(function (e) {
      e.addEventListener("mouseover", function () {
        Cursor.cursor.classList.add("link-hover");
      });

      e.addEventListener("mouseout", function () {
        Cursor.cursor.classList.remove("link-hover");
      });
    });
  }

  /**
   * Description placeholder
   *
   * @static
   */
  static handleMove() {
    document.addEventListener("mousemove", function (e) {
      if (Cursor.cursor.classList.contains("link-hover")) {
        Cursor.cursor.style.transform = `translate(${e.clientX - 77}px, ${e.clientY - 77}px)`;
      } else {
        Cursor.cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      Cursor.cursor.style.display = "block";
    });
  }
}

new Cursor();

if (document.getElementsByClassName("copyclick"))
  applyCopyclick(document.getElementsByClassName("copyclick") as HTMLCollectionOf<HTMLElement>);