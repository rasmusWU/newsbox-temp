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
    header.forEach(function (area) {
        area.classList.add("articleHeaderDark");
    });
    details.forEach(function (area) {
        area.classList.add("articleDetailsDark");
    });
}