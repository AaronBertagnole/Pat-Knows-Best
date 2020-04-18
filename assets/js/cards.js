cards = {
  
  renderLargeVideoGameCard (game) {
    const largeCard = $('<div class="col-12">');
    const box = $('<div class="box">');
    const boxRow = $('<div class="row no-gutters">');
    const gameImageContainer = $('<div class="col-2">');
    const gameImage = $('<img class="img-fluid float-left" src="" alt="" />');
    const bodyContainer = $('<div class="col-10">');
    const body = $('<div class="body float-left">');
    const title = $('<h2 class="title"></h2>');
    const subTitle = $('<h4 class="sub-title">');
    const content = $('<div class="content">');
    const footerRow = $('<div class="row">');
    const footerContainer = $('<div class="col-12 text-right">');
    const website = $('<a href="#" class="website"></a>');

    let genresText = "";
    for(let i = 0; i < game.genres.length; i++) {
      if(i === game.genres.length -1) {
        genresText += game.genres[i].name;
      } else {
        genresText += game.genres[i].name + ", ";
      }
    }

    const rating = "Rating: <span>" + game.rating + " (" + game.ratings_count + " Ratings)</span>";
    const genres = "Genres: <span>" + genresText + "</span>";
    const esrbRating = ""

    $(gameImage).attr("src", game.background_image);
    $(title).html(game.name);
    $(subTitle).html(rating + " " + genres);
    $(content).html(game.description_raw.slice(0,350) + "...");
    $(website).html("Website: <span>" + game.website + "</span>");
    
    
    $(website).appendTo(footerContainer);
    $(footerContainer).appendTo(footerRow);
    
    $(title).appendTo(body);
    $(subTitle).appendTo(body);
    $(content).appendTo(body);
    $(footerRow).appendTo(body);
    $(body).appendTo(bodyContainer);
    
    $(gameImage).appendTo(gameImageContainer);
    
    $(gameImageContainer).appendTo(boxRow);
    $(bodyContainer).appendTo(boxRow);
    $(boxRow).appendTo(box);
    $(box).appendTo(largeCard);

    $(largeCard).appendTo($("#search-results .results"));

  },
  
  renderSmallVideoGameCards (game) {
    const smallCard = $('<div class="col-4">');
    const box = $('<div class="box small">');
    const title = $('<h2 class="title"></h2>');
    const subTitle = $('<h4 class="sub-title">');
    const content = $('<div class="content">');
    const footerRow = $('<div class="row">');
    const notInterested = $('<a href="#" class="not-interested">');
    const website = $('<a href="#" class="website"></a>');
    
    const boxRow = $('<div class="row no-gutters">');
    const gameImageContainer = $('<div class="col-2">');
    const gameImage = $('<img class="img-fluid float-left" src="" alt="" />');
    const bodyContainer = $('<div class="col-4">');
    const body = $('<div class="body float-left">');
    const footerContainer = $('<div class="col-4 text-right">');

    let genresText = "";
    for(let i = 0; i < game.genres.length; i++) {
      if(i === game.genres.length -1) {
        genresText += game.genres[i].name;
      } else {
        genresText += game.genres[i].name + ", ";
      }
    }

    const rating = "Rating: <span>" + game.rating + " (" + game.ratings_count + " Ratings)</span>";
    const genres = "Genres: <span>" + genresText + "</span>";
    const esrbRating = ""

    $(gameImage).attr("src", game.background_image);
    $(title).html(game.name);
    $(subTitle).html(rating + " " + genres);
    $(content).html(game.description_raw.slice(0,250) + "...");
    $(website).html("Website: <span>" + game.website + "</span>");
    
    $(website).appendTo(footerContainer);
    $(footerContainer).appendTo(footerRow);
    
    $(title).appendTo(body);
    $(subTitle).appendTo(body);
    $(content).appendTo(body);
    $(footerRow).appendTo(body);
    $(body).appendTo(bodyContainer);
    
    $(gameImage).appendTo(gameImageContainer);
    
    $(gameImageContainer).appendTo(boxRow);
    $(bodyContainer).appendTo(boxRow);
    $(boxRow).appendTo(box);
    $(box).appendTo(smallCard);

    $(smallCard).appendTo($("#recommendation-results .results"));
  }

};