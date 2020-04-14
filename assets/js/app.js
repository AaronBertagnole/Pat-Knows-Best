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