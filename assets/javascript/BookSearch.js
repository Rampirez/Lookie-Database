var APIkey = "NxD7nHwkbdOwWiA4LU52MQ";
var title = "";
var author = "";

//ajax book search
function displayBooks(search) {
  var queryURL =
    "https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search/index.xml?key=" +
    APIkey +
    "&q=" +
    search;

  $.ajax({
    url: queryURL,
    method: "GET",
    dataType: "xml",
    success: function(xml) {
      console.log(xml);
      $(xml)
        .find("work")
        .each(function() {
          title = $(this)
            .find("title")
            .text();
          title = encodeURIComponent(title).replace(/%20/g, "+");
          author = $(this)
            .find("author").find("name")
            .text();
          author = encodeURIComponent(author).replace(/%20/g, "+");
          var amazonLink =
            "https://www.amazon.com/s?k=" +
            title + " " + author +
            "&i=stripbooks&ref=nb_sb_noss_2";
            amazon = encodeURIComponent(amazon).replace(/%20/g, "+");

          console.log(amazonLink);
          // Append new data to the DIV element.
          $("#showBookResults").append(
            "<div class='p-3'>" +
              "<div><b>Name of Book: </b>" +
              $(this)
                .find("title")
                .text() +
              "</div> " +
              "<div><b>Author: </b>" +
              $(this)
                .find("author").find("name")
                .text() +
              "</div> " +
              "<div><b>Cover Image: </b><br>" +
              "<img src='" +
              $(this)
                .find("image_url")
                .text() +
              "' >" +
              "</div>" +
              "<a target='_blank' href=" +
              amazonLink +
              'class="btn btn-warning">Amazon Search</a>' +
              "</div>"
          );
        });
    }
  });
}

$("#find-book").on("click", function(event) {
  event.preventDefault();
  $("#showBookResults").empty();

  var search = $("#searchInput").val();

  displayBooks(search);
});
