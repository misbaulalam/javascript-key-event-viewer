
let text = document.querySelector("h1");

function keyPressed(edata) {
    if (edata.key === " ") {
        text.textContent = "Space";
    } else {
        text.textContent = edata.key;
    }
};

window.addEventListener("keydown", keyPressed);

