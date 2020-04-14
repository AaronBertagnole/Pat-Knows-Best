// On keypress will search api if more then 3 letters are in the search term. Also waits 1 second after keypress
// before searching to prevent a bunch of ajax calls.
let keyTimer;
$("#search").keypress(function () {
  clearTimeout(keyTimer);
  if( $(this).val().length >= 3 ) {
    keyTimer = setTimeout(function(){
      pat.searchVideoGames($("#search").val(), 4).then((data) => {
        for(let i = 0; i < data.results.length; i++) {
          console.log(data.results[i].name);
        }
      });
    }, 1000);
  }
});