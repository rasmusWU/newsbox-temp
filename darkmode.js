darkModeBtn = document.getElementById("darkModeBtn");
hiddenSVG = document.getElementsByClassName("hidden");
body = document.getElementsByTagName("body");
settingsBody = document.getElementsByClassName("settingsBody");
settingsPage = document.getElementsByClassName("settingsPage");
sliderArea = document.querySelectorAll(".sliderArea");

slider1 = document.getElementById("slider1");
slider2 = document.getElementById("slider2");
slider3 = document.getElementById("slider3");
slider4 = document.getElementById("slider4");
slider5 = document.getElementById("slider5");



darkModeBtn.addEventListener("click", function (event) {
    if (window.localStorage.getItem("darkmode", "true")) {
        window.localStorage.removeItem("darkmode");
        darkModeBtn.innerHTML = "TOGGLE DARK MODE";
    } else {
        window.localStorage.setItem("darkmode", "true");
        darkModeBtn.innerHTML = "TOGGLE LIGHT MODE";
    }
});

if (window.localStorage.getItem("darkmode", "true")) {
    darkModeBtn.innerHTML = "TOGGLE LIGHT MODE";
}

slider1.addEventListener("click", function (move) {
    slider1.classList.toggle("moved");
    
});

slider2.addEventListener("click", function (move) {
    slider2.classList.toggle("moved");
});

slider3.addEventListener("click", function (move) {
    slider3.classList.toggle("moved");
});

slider4.addEventListener("click", function (move) {
    slider4.classList.toggle("moved");
});

slider5.addEventListener("click", function (move) {
    slider5.classList.toggle("moved");
});