    function fetchNews() {
      fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=AZMibVeu6yQZlX6GCRiPHXXdeY4mATfY")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data.results);

          var template = document.getElementById("template");
          var articleList = document.querySelector(".articleList");

          data.results.forEach(function (result) {
            var clone = template.content.cloneNode(true);

            var img = clone.querySelector(".articleImg");
            var header = clone.querySelector(".articleHeader");
            var details = clone.querySelector(".articleDetails");

            header.innerText = result.title;
            header.classList.add("articleHeaderDark");
            details.innerText = result.abstract;
            details.classList.add("articleDetailsDark");

            if (window.localStorage.getItem("europe")) {
            if (result.section == "us") {
            articleList.appendChild(clone);

          }
        }
          })
        });
    }

    fetchNews();