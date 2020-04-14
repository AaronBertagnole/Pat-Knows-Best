// On keypress will search api if more then 3 letters are in the search term. Also waits 1 second after keypress
// before searching to prevent a bunch of ajax calls.
let keyTimer;
$("#search").keypress(function () {
  clearTimeout(keyTimer);
  if( $(this).val().length >= 2 ) {
    keyTimer = setTimeout(function(){

      var platfrom = null;

      //TODO:: Need to setup to check what platform they have selected and store it in a variable, then
      // use that in an if statement to check if it is a board game, or a video game. If it is a board game one
      // then use that use that one, if it is anything else use the video game one and pass in the platform

      // Search for video games
      pat.searchVideoGames($("#search").val(), 4, {}, function(results) {
        console.log("results: ", results);
        const games = results.results;
        for(let i = 0; i < games.length; i++) {
          console.log(games[i].name);
        }
      });

      // Search for board games
      pat.searchBoardGames($("#search").val(), {},function(results) {
        console.log("results: ", results);
        const games = results.results;
        for(let i = 0; i < games.length; i++) {
          console.log(games[i].name);
        }
      });
    }, 1000);
  }
});