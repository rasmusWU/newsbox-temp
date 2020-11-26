    function fetchNews() {
      fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=AZMibVeu6yQZlX6GCRiPHXXdeY4mATfY")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data.results);

          var template = document.getElementById("template");
          var articleListUS = document.querySelector(".articleList__US");
          var articleListWorld = document.querySelector(".articleList__world");

          data.results.forEach(function (result) {
            var clone = template.content.cloneNode(true);

            var img = clone.querySelector(".articleImg");
            var header = clone.querySelector(".articleHeader");
            var details = clone.querySelector(".articleDetails");

            header.innerText = result.title;
            details.innerText = result.abstract;

            if (window.localStorage.getItem("darkmode", "true")) {
              header.classList.add("articleHeaderDark");
              details.classList.add("articleDetailsDark");
            }

            if (window.localStorage.getItem("us", "on") && result.section == "us") {
              articleListUS.appendChild(clone);
            };

            if (window.localStorage.getItem("world", "on") && result.section == "world") {
              articleListWorld.appendChild(clone);
            };

          })
        });
    }

    fetchNews();