document.addEventListener("DOMContentLoaded", () => {

    console.log("T.A.B By Edy - Site încărcat cu succes!");

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.05)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });

});
