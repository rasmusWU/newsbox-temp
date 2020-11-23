topNav = document.querySelector(".topNav");
svg = document.querySelectorAll(".fas");
search = document.querySelector(".searchNav");
searchInput = document.querySelector(".searchNav__searchBar");
searchBtn = document.querySelector(".searchNav__searchBtn");
blackSVG = document.querySelector(".fa-search");
section = document.querySelectorAll(".sectionLink");
article = document.querySelectorAll(".articleLink");
body = document.querySelector("body");



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