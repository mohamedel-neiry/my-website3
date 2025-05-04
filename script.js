document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.querySelectorAll(".circle-button, .info-box, .link-box");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            this.style.transform = "scale(0.9)";
            setTimeout(() => {
                this.style.transform = "scale(1)";
            }, 200);
        });
    });
});
