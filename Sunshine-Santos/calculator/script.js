const screen = document.getElementById("screen");
const buttons = document.querySelectorAll(".btn");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");

let expression = "";

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.dataset.val;
        if (value) {
            expression += value;
            screen.value = expression;
        }
    });
});

equal.addEventListener("click", () => {
    try {
        screen.value = eval(expression);
        expression = screen.value;
    } catch {
        screen.value = "Error";
        expression = "";
    }
});

clear.addEventListener("click", () => {
    expression = "";
    screen.value = "";
});
