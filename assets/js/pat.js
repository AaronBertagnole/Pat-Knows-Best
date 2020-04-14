const pat = {

  // Variables For The Pat Class

  /** - METHODS - **/

  /**
   * Searches the rawg.io api for the game provided, along with what platform they would like.
   * @param {string} searchTerm - The game we are searching for.
   * @param {number} platform - The platform that we want to search under that we get from platform dropdown.
   * @param {number} page - The page we want to start on.
   * @param {number} [limit=10] - The amount of items per page.
   *
   * @example
   * pat.searchVideoGames("Counter-Strike, 4);
   *
   * @return {json}
   */
  async searchVideoGames(searchTerm, platform, page = 1, limit = 10) {
    const baseUrl = "https://api.rawg.io/api/games";
    const queryString = "?platforms=" + platform + "&search=" + searchTerm + "&page=" + page + "&page_size=" + limit;

    const response = await fetch(baseUrl + queryString, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': "Pat Knows Best"
      },
    });
    return response.json();
  },


  /**
   * Searches the boardgameatlas.com api for the game provided
   * @param {string} name - The board game we are searching for.
   * @param {number} [limit=10] - The
   * @param {string} [orderBy= - The way the items are ordered by.
   * @param {boolean} [fuzzyMatch=true] - If set to true it helps with typos
   */
  searchBoardGames(name, limit = 10, orderBy = "popularity", fuzzyMatch = true) {
    const url = "https://www.boardgameatlas.com/api/search";
    const queryString = { "name" : name, "limit" : limit, "fuzzy_match" : fuzzyMatch}
  },

  // Recommended method to return the recommended video game or board
  // game with a count arg with a default of 3
  recommend(count = 3) {

  }
};
