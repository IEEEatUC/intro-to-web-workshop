let button = document.getElementById("changeStyleBtn");
let text = document.getElementsByClassName("text")[0]; // Get the first element only

button.onclick = (ev) => {
    if (text.classList.contains("change-style")) {
        text.classList.remove("change-style");
    }
    else {
        text.classList.add("change-style");
    }
}