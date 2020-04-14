// On keypress will search api if more then 3 letters are in the search term. Also waits 1 second after keypress
// before searching to prevent a bunch of ajax calls.
let keyTimer;
$("#search").keypress(function () {
  clearTimeout(keyTimer);
  if( $(this).val().length >= 2 ) {
    keyTimer = setTimeout(function(){
      pat.searchBoardGames($("#search").val()).then((data) => {
        for(let i = 0; i < data.games.length; i++) {
          console.log(data.games[i].thumb_url);
        }
      });
    }, 1000);
  }
});