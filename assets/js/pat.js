//night mode javascript
//we grab the value of "nightMode" from local storage and use it later, basically check and see if user 
//has night mode enabled or dabled
let nightMode= localStorage.getItem('nightMode')
const nightModeToggle = document.querySelector("#nightModeToggle");
console.log(nightMode);
//this varable is a function to enable night mode (it will add a class to body called nightMode)
const enableNightMode = () => {
  document.body.classList.add('nightMode');
  localStorage.setItem('nightMode', 'enabled')
};
//the same thing, to set night mode to disabled, or null (and remove the nightMode class)
const disableNightMode = () => {
  document.body.classList.remove('nightMode');
  localStorage.setItem('nightMode', null);
};
//if night mode is enabled in localstorage, enable night mode (so user will have night 
// mode enabled on page load if they have already done night mode, otherwise, it will defealt to root class perameters)
if (nightMode === 'enabled') {
  enableNightMode()
};
//when user clicks the night mode button, if night mode is enabled, it will disable, and vice-versa

nightModeToggle.addEventListener('click', () => {
  nightMode = localStorage.getItem('nightMode');
  if (nightMode !== 'enabled') {
    enableNightMode();
    console.log(nightMode);
  } else {
    disableNightMode();
    console.log(nightMode);
  }
});

const pat = {

  // Variables For The Pat Class

  /**
   * This is the main search method. Searches any api and returns the results in json
   * @param {string} url - The Url you want to use in the fetch
   * @param callback
   * @return {json}
   */
  search(url, callback) {
    $.ajax({
      url: url,
      method: "GET",
      headers: {
        //"Access-Control-Allow-Origin": "*",
        //"Access-Control-Allow-Headers": "*"
      },
      success: function (result) {
        callback(result);
      }
    });
  },

  /**
   * Searches the rawg.io api for the game provided, along with what platform they would like.
   * @param {string} searchTerm - The game we are searching for.
   * @param {number} platform - The platform that we want to search under that we get from platform dropdown.
   * @param {Object} options - The Options for the search.
   * @param {number} [options.page=1] - The Page we are currently on.
   * @param {number} [options.limit=3] - The amount of items we will retrieve at a time.
   *
   * @param callback
   *
   */
  searchVideoGames(searchTerm, platform, options, callback) {
    const page = options.page || 1;
    const limit = options.limit || 3;
    const url = pat.getVideoGameUrl(searchTerm, platform);

    pat.search(url, function (response) {
      console.log("Search Video Games: ", response);
      callback(response);
    });
  },

  getVideoGameUrl(searchTerm, platform, options) {
    const page = options.page || 1;
    const limit = options.limit || 3;
    const baseUrl = "https://api.rawg.io/api/games";
    const queryString = "?platforms=" + platform + "&search=" + searchTerm + "&page=" + page + "&page_size=" + limit;

    return baseUrl + queryString;
  },

  /**
   * Searches the boardgameatlas.com api for the game provided
   * @param {string} name - The board game we are searching for.
   * @param {Object} options - The Options for the search.
   * @param {number} [options.limit=10] - The amount of items to return
   * @param {string} [options.orderBy="popularity"] - The way the items are ordered by.
   * @param {boolean} [options.fuzzyMatch=true] - If set to true it helps with typos
   *
   * @param callback
   */
  searchBoardGames(name, options, callback) {
    const limit = options.limit || 3;
    const orderBy = options.orderBy || "popularity";
    const fuzzyMatch = options.fuzzyMatch || true;

    const baseUrl = "https://www.boardgameatlas.com/api/search";
    const queryString = "?name=" + name+ "&limit=" + limit + "&order_by=" + orderBy + "&fuzzy_match=" + fuzzyMatch + "&client_id=AoMOmUcuiK";

    pat.search(baseUrl + queryString, function(response) {
      console.log("Search Board Games: ", response);
      callback(response);
    });
  },

  /**
   * Returns Pats recommendations to the user for video games
   * @param {number} gameId - The Id of the game we want to get recommendations for.
   * @param {number} platform - The id of the platform we are searching under.
   * @param {Object} options - The Options that for the query
   * @param {number} [options.limit=3] - The amount of items to return.
   * @param callback
   *
   * @returns {json}
   */
  recommendVideoGames(gameId, platform = 4, options, callback) {
    const limit = options.limit || 3;
    const baseUrl = "https://api.rawg.io/api/games/" + gameId + "/suggested";
      pat.search(baseUrl, function (response) {
        console.log("Video game recommendations: ", response);
        callback(response);
      });
  },

  /**
   *  Returns Pats recommendations to the user for board games
   * @param {Object} options - The Options that for the query
   * @param {number} [options.limit=3] - The number of items we want to retrieve.
   * @returns {json}
  */
  recommendBoardGames(options, callback) {
    const limit = options.limit || 3;
    const baseUrl = "https://www.boardgameatlas.com/api/search";
    const queryString = "?random=true&client_id=AoMOmUcuiK";
    for (let i = 0; i < limit; i++) {
      pat.search(baseUrl + queryString, function (response){
        console.log("random game is ", response);
        callback(response);
      });
    }
  },

  /**
   * Gets all the platforms and puts board game as the first choice.
   * @param callback
   */
  getPlatforms(callback) {
    let platforms = [{id:0, name:"Board Game", slug:"board-game"}];
    const url = "https://api.rawg.io/api/platforms";
    pat.search(url, function(response) {
      for(let i = 0; i < response.results.length; i++) {
        const platform = response.results[i];
        platforms.push(platform);
      }
       callback(platforms);
    });
  },

};

