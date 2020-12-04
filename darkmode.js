var page = document.querySelector(".topNav h2").innerText;

if (page == "Newsbox" || page == "Archive") {
    var topNav = document.querySelector(".topNav");
    var svg = document.querySelectorAll(".fas");
    var search = document.querySelector(".searchNav");
    var searchInput = document.querySelector(".searchNav__searchBar");
    var searchBtn = document.querySelector(".searchNav__searchBtn");
    var blackSVG = document.querySelector(".fa-search");
    var section = document.querySelectorAll(".sectionLink");
    var article = document.querySelectorAll(".articleLink");
    var body = document.querySelector("body");

    if (window.localStorage.getItem("darkmode", "true")) {
        topNav.classList.add("topNavDark");
        svg.forEach(function (area) {
            area.classList.add("svgDark");
            area.classList.remove("svg");
        });
        search.classList.add("searchNavDark");
        searchInput.classList.add("searchNav__searchBarDark");
        searchBtn.classList.add("searchNav__searchBtnDark");
        section.forEach(function (area) {
            area.classList.add("sectionLinkDark");
        });
        article.forEach(function (area) {
            area.classList.add("articleLinkDark");
        });
        body.style.backgroundColor = "#161616";
        blackSVG.style.color = "#181818";
    }
}

if (page == "News settings") {
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
}