const pat = {

  // Variables For The Pat Class

  /** - METHODS - **/

  // Search method to search for video games
  searchVideoGames(searchTerm, platform = 4, page = 1, page_limit = 10) {
    const url = "https://api.rawg.io/api/games";
    const queryString = {"platforms" : platform, "search" : searchTerm, "page" : page, "page_limit" : page_limit};
    console.log("URL: ",url);

    $.get(url, queryString, function(data) {
      console.log(data);
      return data;
    });
  },


  // Search Method to search for board games
  searchBoardGames() {

  },

  // Recommended method to return the recommended video game or board
  // game with a count arg with a default of 3
  recommend(count = 3) {

  }
};