var page = document.querySelector(".topNav h2").innerText;

var template = document.getElementById("template");
var articleListUS = document.querySelector(".articleList__US");
var articleListWorld = document.querySelector(".articleList__world");
var articleListHealth = document.querySelector(".articleList__health");
var articleListBusiness = document.querySelector(".articleList__business");
var articleListTravel = document.querySelector(".articleList__travel");
var archiveBtn = document.querySelector(".archiveBtn");

var displayToggleUS = document.querySelector(".displayToggleUS");
var displayToggleGlobal = document.querySelector(".displayToggleGlobal");
var displayToggleHealth = document.querySelector(".displayToggleHealth");
var displayToggleBusiness = document.querySelector(".displayToggleBusiness");
var displayToggleTravel = document.querySelector(".displayToggleTravel");
    
    function fetchNews() {
      fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=AZMibVeu6yQZlX6GCRiPHXXdeY4mATfY")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data.results);

          if (!window.localStorage.getItem("savedArticles")) {
            var array = [];
            array = JSON.stringify(array);
            window.localStorage.setItem("savedArticles", array);
          }

          data.results.forEach(function (result) {
            var clone = template.content.cloneNode(true);

            var img = clone.querySelector(".articleImg");
            var header = clone.querySelector(".articleHeader");
            var details = clone.querySelector(".articleDetails");
            var date = clone.querySelector(".articleDate");
            var btn = clone.querySelector(".archiveBtn");
            btn.addEventListener("click", archiveBtnClick);

            btn.dataset.title = result.title;
            btn.dataset.abstract = result.abstract;
            btn.dataset.published_date = result.published_date;
            btn.dataset.section = result.section;

            header.innerText = result.title;
            details.innerText = result.abstract;
            date.innerText = result.published_date;

            if (window.localStorage.getItem("darkmode", "true")) {
              header.classList.add("articleHeaderDark");
              details.classList.add("articleDetailsDark");
              date.classList.add("articleDateDark");
            }

            if (articleListUS && window.localStorage.getItem("us", "on") && result.section == "us") {
              articleListUS.appendChild(clone);
            }

            if (articleListWorld && window.localStorage.getItem("world", "on") && result.section == "world") {
              articleListWorld.appendChild(clone);
            }

            if (articleListHealth && window.localStorage.getItem("health", "on") && result.section == "health") {
              articleListHealth.appendChild(clone);
            }

            if (articleListBusiness && window.localStorage.getItem("business", "on") && result.section == "business") {
              articleListBusiness.appendChild(clone);
            }

            if (articleListTravel && window.localStorage.getItem("travel", "on") && result.section == "travel") {
              articleListTravel.appendChild(clone);
            }

          });
        });
    }
if (page == "Newsbox") {
  fetchNews();

  displayToggleUS.addEventListener("click", function (hide) {
    articleListUS.classList.toggle("categoryDisplayOff");
  });

  displayToggleGlobal.addEventListener("click", function (hide) {
    articleListWorld.classList.toggle("categoryDisplayOff");
  });

  displayToggleHealth.addEventListener("click", function (hide) {
    articleListHealth.classList.toggle("categoryDisplayOff");
  });

  displayToggleBusiness.addEventListener("click", function (hide) {
    articleListBusiness.classList.toggle("categoryDisplayOff");
  });

  displayToggleTravel.addEventListener("click", function (hide) {
    articleListTravel.classList.toggle("categoryDisplayOff");
  });
}


function archiveBtnClick (event) {
      var savedArticles = window.localStorage.getItem("savedArticles");
      savedArticles = JSON.parse(savedArticles);
      savedArticles.push(event.target.dataset);
      console.log(JSON.stringify(savedArticles))
      window.localStorage.setItem("savedArticles", JSON.stringify(savedArticles));
    };



if (page == "Archive") {
  var template = document.getElementById("template");
  var archiveListUS = document.querySelector(".archiveList__US");
  var archiveListWorld = document.querySelector(".archiveList__world");
  var archiveListHealth = document.querySelector(".archiveList__health");
  var archiveListBusiness = document.querySelector(".archiveList__business");
  var archiveListTravel = document.querySelector(".archiveList__travel");
  var archiveBtn = document.querySelector(".archiveBtn");

  var savedArticles = window.localStorage.getItem("savedArticles")
  savedArticles = JSON.parse(savedArticles);
  console.log(savedArticles);

  savedArticles.forEach(function (result) {

    var clone = template.content.cloneNode(true);

    var img = clone.querySelector(".articleImg");
    var header = clone.querySelector(".articleHeader");
    var details = clone.querySelector(".articleDetails");
    var date = clone.querySelector(".articleDate");
    var btn = clone.querySelector(".archiveBtn");

    if (window.localStorage.getItem("darkmode", "true")) {
      header.classList.add("articleHeaderDark");
      details.classList.add("articleDetailsDark");
      date.classList.add("articleDateDark");
    }

    if (archiveListUS && result.section == "us") {
      archiveListUS.appendChild(clone);
    }

    if (archiveListWorld && result.section == "world") {
      archiveListWorld.appendChild(clone);
    }

    if (archiveListHealth && result.section == "health") {
      archiveListHealth.appendChild(clone);
    }

    if (archiveListBusiness && result.section == "business") {
      archiveListBusiness.appendChild(clone);
    }

    if (archiveListTravel && result.section == "travel") {
      archiveListTravel.appendChild(clone);
    }
  
    header.innerText = result.title;
    details.innerText = result.abstract;
    date.innerText = result.published_date;
  });

  displayToggleUS.addEventListener("click", function (hide) {
    archiveListUS.classList.toggle("categoryDisplayOff");
  });

  displayToggleGlobal.addEventListener("click", function (hide) {
    archiveListWorld.classList.toggle("categoryDisplayOff");
  });

  displayToggleHealth.addEventListener("click", function (hide) {
    archiveListHealth.classList.toggle("categoryDisplayOff");
  });

  displayToggleBusiness.addEventListener("click", function (hide) {
    archiveListBusiness.classList.toggle("categoryDisplayOff");
  });

  displayToggleTravel.addEventListener("click", function (hide) {
    archiveListTravel.classList.toggle("categoryDisplayOff");
  });
}

