    function fetchNews() {
      fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=AZMibVeu6yQZlX6GCRiPHXXdeY4mATfY")
        .then(function (response) {
          return response.text();
        })
        .then(function (data) {
          console.log(data);

          var template = document.getElementById("template");
          var articleList = document.querySelector(".articleList");

          data.results.forEach(function (result) {
            var clone = template.content.cloneNode(true);

            var img = clone.querySelector(".articleImg");
            var header = clone.querySelector(".articleHeader");
            var details = clone.querySelector(".articleDetails");

            header = data.title;

          })
        });
    }

    fetchNews();