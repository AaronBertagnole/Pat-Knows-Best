

$("#search-results").hide();
$("#pats-recommendations").hide();

// On keypress will search api if more then 3 letters are in the search term. Also waits 1 second after keypress
// before searching to prevent a bunch of ajax calls.
let keyTimer;
$("#search").keyup(function () {
  clearTimeout(keyTimer);
  $("#search-results .results").empty();
  $("#search-results").fadeOut();
  $("#pats-recommendations .results").empty();
  $("#pats-recommendations").fadeOut();
  if( $(this).val().length >= 2 ) {
    keyTimer = setTimeout(function(){
      var platform = $("#platform").val();
      console.log("Selected Platform: " + platform);

      // Check to see if the platform selected is 0
      if( parseInt(platform) === 0 ) {
        // Search for board games

        pat.searchBoardGames($("#search").val(), {},function(results) {
          $("#search-results .results").empty();



          const games = results.games;
          for(let i = 0; i < games.length; i++) {
            console.log(games[i].name);
          }
        });
      } else if (platform > 0) {
        // Search for video games
        pat.searchVideoGames($("#search").val(), platform,{},function(results) {
          $("#search-results .results").empty();
          $("#search-results").fadeIn();
          const games = results.results;
          if(results.count > 0) {
            $("#search-results").fadeIn();
            for(let i = 0; i < games.length; i++) {
              console.log(games[i].name);
              pat.getVideoGameById(games[i].id, function(result) {
                cards.renderLargeVideoGameCard(result);
              });
            }
          } else {
            $("#search-results .results").html("No Results Found");
          }
        });
      } else {
        //TODO:: Display that they need to select a platform for the search
        $("#search-results .results").html("Please Select A Platform");
        console.log('please select a platform');
      }
    }, 300);
  }
});

pat.getPlatforms(function (results) {
  for(let i = 0; i < results.length; i++) {
    const option = $("<option value='" + results[i].id + "'>" + results[i].name + "</option>");
    $(option).appendTo($("#platform"));
  }
});

$("body").on("click", ".website", function(event) {
  event.preventDefault();
  const id = $(this).attr("data-id");
  $("#search-results .results").children().fadeOut("slow");
  pat.getVideoGameById(id, function(game) {
    cards.renderLargeVideoGameCard(game);
    pat.recommendVideoGames(game.id, $("#platform").val(), {}, function(result) {
      const recommendations = result.results;
      $("#pats-recommendations .results").empty();
      $("#pats-recommendations").fadeIn();
      for(let i = 0; i < 3; i++) {
        console.log(recommendations[i].name);
        pat.getVideoGameById(recommendations[i].id, function (result) {
          cards.renderRecommendedVideoGameCard(result);
        });
      }
    });
  });
});

/**
 * When a User clicks on a not interested button we fade out that item and put in a new item.
 */
$("body").on("click", ".not-interested", function(event) {
  event.preventDefault();
  $(this).parents(".box-container").fadeOut().remove();
  pat.recommendationsCurrentItem++;
  pat.getVideoGameById(pat.recommendations.results[pat.recommendationsCurrentItem].id, function (result) {
    cards.renderRecommendedVideoGameCard(result);
  });
});

$("body").on("click", "#refresh-all", function(event) {
  event.preventDefault();
  $("#pats-recommendations .results").children().fadeOut().remove();
  for(let i = 0; i < 3; i++) {
    pat.recommendationsCurrentItem++;
    pat.getVideoGameById(pat.recommendations.results[pat.recommendationsCurrentItem].id, function (result) {
      cards.renderRecommendedVideoGameCard(result);
    });
  }
});


$("#pat").on("click", function() {
  if($(this).attr("data-current") === "male") {

    $(this).attr("src", $(this).attr("data-female-url"));
    $(this).attr("data-current", "female");
    localStorage.setItem("avatar", $(this).attr("data-female-url"));

  } else {
    $(this).attr("src", $(this).attr("data-male-url"));
    $(this).attr("data-current", "male");
    localStorage.setItem("avatar", $(this).attr("data-male-url"));
  }
});

if (localStorage.getItem("avatar") == "assets/images/pat_female.png") {
  $("#pat").attr("src", $("#pat").attr("data-female-url"));
    $("#pat").attr("data-current", "female");
} 





