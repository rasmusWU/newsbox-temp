darkModeBtn = document.querySelector(".darkModeBtn");
hiddenSVG = document.querySelector(".hidden");
settingsPage = document.querySelector(".settingsPage");
newsSettings = document.querySelector(".newsSettings");
topNav = document.querySelector(".topNav");
svg = document.querySelector(".fas");
sliderArea = document.querySelectorAll(".sliderArea");
body = document.querySelector("body");


darkModeBtn.addEventListener("click", function (event) {
    if (window.localStorage.getItem("darkmode", "true")) {
        window.localStorage.removeItem("darkmode");
        darkModeBtn.innerHTML = "TOGGLE DARK MODE";
        settingsPage.classList.remove("settingsPageDark");
        newsSettings.classList.remove("newsSettingsDark");
        darkModeBtn.classList.remove("darkModeBtnDark");
        topNav.classList.remove("topNavDark");
        svg.classList.remove("svgDark");
        svg.classList.add("svg");
        sliderArea.forEach(function (area) {
            area.classList.remove("sliderAreaDark");
        });
        body.style.backgroundColor = "#f0f3f4";
    } else {
        window.localStorage.setItem("darkmode", "true");
        darkModeBtn.innerHTML = "TOGGLE LIGHT MODE";
        settingsPage.classList.add("settingsPageDark");
        newsSettings.classList.add("newsSettingsDark");
        darkModeBtn.classList.add("darkModeBtnDark");
        topNav.classList.add("topNavDark");
        svg.classList.add("svgDark");
        svg.classList.remove("svg");
        sliderArea.forEach(function (area) {
            area.classList.add("sliderAreaDark");
        });
        body.style.backgroundColor = "#3f3f3f";
    }
});

if (window.localStorage.getItem("darkmode", "true")) {
    darkModeBtn.innerHTML = "TOGGLE LIGHT MODE";
    settingsPage.classList.add("settingsPageDark");
    newsSettings.classList.add("newsSettingsDark");
    darkModeBtn.classList.add("darkModeBtnDark");
    topNav.classList.add("topNavDark");
    svg.classList.add("svgDark");
    svg.classList.remove("svg");
    sliderArea.forEach(function (area) {
        area.classList.add("sliderAreaDark");
    });
    body.style.backgroundColor = "#3f3f3f";
}