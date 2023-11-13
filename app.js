'use strict';

const body = document.querySelector("body");
const switcher = document.querySelector('.btn');

function setTheme() {
    console.log("var:" + localStorage.getItem("colourTheme"));
    if (localStorage.getItem("colourTheme") == "dark-theme") {

        body.classList.add("dark-theme");
        body.classList.remove("light-theme");
        console.log("changing to dark theme");
        switcher.textContent = "Light";
        
    } else if (localStorage.getItem("colourTheme") == "light-theme") {
        
        body.classList.add("light-theme");
        body.classList.remove("dark-theme");
        console.log("changing to light theme");
        switcher.textContent = "Dark";
    }
}

switcher.addEventListener("click", function() {
    
    body.classList.toggle("dark-theme");
    body.classList.toggle("light-theme");

    let actualTheme = body.className;
    localStorage.setItem("colourTheme", actualTheme);
    console.log("setting!!");

    console.log("var:" + localStorage.getItem("colourTheme"));

    if (actualTheme == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
});



