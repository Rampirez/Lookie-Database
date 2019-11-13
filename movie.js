var movie = $("#searchBar").val();
function displayMovie(){
    var queryUrl = "https://www.omdbapi.com/?t=" + movie + "&apikey=7127e834";

    $.ajax({
        url: queryUrl,
        method: "GET"
      }).then(function(response) {
        var movieDiv = $("<div class='movie'>");
        var title = response.Title;
        var hOne = $("<h>").text("Title: " + title);
        movieDiv.append(hOne);
        var rated = response.Rated;
        var pOne = $("<p>").text("Rated: " + rated);
        movieDiv.append(pOne);
        var plot = response.Plot;
        var pTwo = $("<p>").text("Plot: " + plot);
        movieDiv.append(pTwo);
        var mPoster = response.poster;
        var poster = $("<img>").text("Poster: " + mPoster);
        movieDiv.append(poster);
      });   
}
displayMovie();
