// On keypress will search api if more then 3 letters are in the search term. Also waits 1 second after keypress
// before searching to prevent a bunch of ajax calls.
let keyTimer;
$("#search").keyup(function () {
  clearTimeout(keyTimer);
  if( $(this).val().length >= 2 ) {
    keyTimer = setTimeout(function(){

      var platform = $("#platform").val();
      console.log("Selected Platform: " + platform);

      // Check to see if the platform selected is 0
      if( parseInt(platform) === 0 ) {
        // Search for board games
        pat.searchBoardGames($("#search").val(), {},function(results) {
          const games = results.games;
          for(let i = 0; i < games.length; i++) {
            console.log(games[i].name);
          }
        });
      } else if ( platform > 0) {
        // Search for video games
        pat.searchVideoGames($("#search").val(), platform, {}, function(results) {
          const games = results.results;
          for(let i = 0; i < games.length; i++) {
            console.log(games[i].name);
          }
        });
      } else {
        //TODO:: Display that they need to select a platform for the search
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

$(function(){



});

