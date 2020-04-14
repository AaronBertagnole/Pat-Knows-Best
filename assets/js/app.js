// On keypress will search api if more then 3 letters are in the search term. Also waits 1 second after keypress
// before searching to prevent a bunch of ajax calls.
let keyTimer;
$("#search").keypress(function () {
  clearTimeout(keyTimer);
  if( $(this).val().length >= 3 ) {
    keyTimer = setTimeout(function(){
      const results = pat.searchVideoGames($("#search").val());
      console.log(results);
    }, 1000);
  }
});