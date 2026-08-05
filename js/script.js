console.log("T.A.B By Edy - Site încărcat!");

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (header) {
    if (window.scrollY > 50) {
      header.style.boxShadow = "0 4px 15px rgba(255,0,0,0.5)";
    } else {
      header.style.boxShadow = "none";
    }
  }
});
