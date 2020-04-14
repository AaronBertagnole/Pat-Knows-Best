const pat = {

  // Variables For The Pat Class


  /**
   * This is the main search method. Searches any api and returns the results in json
   * @param {string} url - The Url you want to use in the fetch
   * @return {json}
   */
  async search(url) {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': "Pat Knows Best"
      },
    });
    return response.json();
  },

  /**
   * Searches the rawg.io api for the game provided, along with what platform they would like.
   * @param {string} searchTerm - The game we are searching for.
   * @param {number} platform - The platform that we want to search under that we get from platform dropdown.
   * @param {number} [page=1] - The page we want to start on.
   * @param {number} [limit=10] - The amount of items per page.
   *
   * @return {json}
   */
  async searchVideoGames(searchTerm, platform, page = 1, limit = 10) {
    const baseUrl = "https://api.rawg.io/api/games";
    const queryString = "?platforms=" + platform + "&search=" + searchTerm + "&page=" + page + "&page_size=" + limit;

    return this.search(baseUrl + queryString);
  },

  /**
   * Searches the boardgameatlas.com api for the game provided
   * @param {string} name - The board game we are searching for.
   * @param {number} [limit=10] - The amount of items to return
   * @param {string} [orderBy= - The way the items are ordered by.
   * @param {boolean} [fuzzyMatch=true] - If set to true it helps with typos
   *
   * @returns {json}
   */
  async searchBoardGames(name, limit = 10, orderBy = "popularity", fuzzyMatch = true) {
    const baseUrl = "https://www.boardgameatlas.com/api/search";
    const queryString = "?name=" + name+ "&limit=" + limit+ "&fuzzy_match=" + fuzzyMatch + "&client_id=AoMOmUcuiK";
    console.log(baseUrl + queryString);

   return this.search(baseUrl + queryString);
  },

  /**
   * Returns Pats recommendations to the user
   * @param {number} [limit=3] - The amount of items to return
   *
   * @returns {json}
   */
  async recommendVideoGames(limit = 3) {

  },

  async recommendBoardGames(limit = 3) {

  }
};
