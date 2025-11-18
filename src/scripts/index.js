import loadHome from "./home.js";
import loadAbout from "./about.js";

import "./../stylesheets/styles.css";
import "./../stylesheets/modern-normalize.css";

const content = document.getElementById("content");

// render old content
function render(moduleFn) {
    content.innerHTML = "";       // wipe old content
    content.appendChild(moduleFn());
}

// home page on load
render(loadHome);

// Add button listeners
document.getElementById("home-btn").addEventListener("click", () => {
    render(loadHome);
});

document.getElementById("menu-btn").addEventListener("click", () => {
    render(loadHome);
});

document.getElementById("about-btn").addEventListener("click", () => {
    render(loadAbout);
});