document.addEventListener("DOMContentLoaded", function () {
    var input = document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute(
        "value",
        `${window.screen.width + " x " + window.screen.height}`
    );
    input.setAttribute("name", "screen_size");
    document.querySelector("form").appendChild(input);
});
