const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

// Main events function
function events() {
    
    // Adds a list element
    const element = document.createElement("li");
    list.appendChild(element);
    element.innerText = input.value;
    input.value = "";

    // Marks the element as "done" when clicked on.
    element.addEventListener("click", function () {
        element.style.textDecoration = "line-through";
    });

    // Removes the element when double clicked.
    element.addEventListener("dblclick", function () {
        list.removeChild(element);
    });
}


// Adds a list element when the "+" button is pressed.
button.addEventListener("click", function () {
    events()
});


// Adds a list element when the "Enter" key is pressed.
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        events();
    };
});