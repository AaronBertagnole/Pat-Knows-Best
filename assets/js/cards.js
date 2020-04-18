cards = {

  renderSearchVideoGameCard(game) {
    const largeCard = $('<div class="col-12 mb-3">');
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
    const footerContainer = $(' <div class="col-12 text-right">');
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
    //const esrbRating = "ESRB: <span>" + game.esrb.name + "</span>";

    $(gameImage).attr("src", game.background_image);
    $(title).html(game.name);
    $(subTitle).html(rating + " " + genres);
    $(content).html(game.description_raw.slice(0,350) + "...");

    console.log("website: ", game.website);
    if(game.website === "") {
      $(website).html("Website: Not Available")
    } else {
      $(website).html("Website: <span>" + game.website + "</span>");
    }
    $(website).attr("data-id", game.id);


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
    $(largeCard).hide().fadeIn("slow");
  },

  renderLargeVideoGameCard(game) {
    const largeCard = $('<div class="col-12 mb-3">');
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
    const footerContainer = $(' <div class="col-12 text-right">');
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
    //const esrbRating = "ESRB: <span>" + game.esrb.name + "</span>";

    $(gameImage).attr("src", game.background_image);
    $(title).html(game.name);
    $(subTitle).html(rating + " " + genres);
    $(content).html(game.description_raw.slice(0,350) + "...");

    console.log("website: ", game.website);
    if(game.website === "") {
      $(website).html("Website: Not Available")
    } else {
      $(website).html("Website: <span>" + game.website + "</span>");
    }
    $(website).attr("data-id", game.id);
    
    
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
    $(largeCard).hide().fadeIn("slow");

  },

  renderRecommendedVideoGameCard(game) {
    const largeCard = $('<div class="box-container col-12 mb-3">');
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
    const footerContainer = $(' <div class="col-12 text-right">');
    const website = $('<a href="#" class="website"></a>');
    const notInterested = $('<a href="#" class="not-interested">Not Interested</a>');

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
    //const esrbRating = "ESRB: <span>" + game.esrb.name + "</span>";

    $(gameImage).attr("src", game.background_image);
    $(title).html(game.name);
    $(subTitle).html(rating + " " + genres);
    $(content).html(game.description_raw.slice(0,350) + "...");

    console.log("website: ", game.website);
    if(game.website === "") {
      $(website).html("Website: Not Available")
    } else {
      $(website).html("Website: <span>" + game.website + "</span>");
    }
    $(website).attr("data-id", game.id);

    $(notInterested).appendTo(footerContainer);
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

    $(largeCard).appendTo($("#pats-recommendations .results"));
    $(largeCard).hide().fadeIn("slow");

  },

  renderSearchBoardGameCard(game) {
    const largeCard = $('<div class="col-12 mb-3">');
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
    const footerContainer = $(' <div class="col-12 text-right">');
    const website = $('<a href="#" class="website"></a>');

    const rating = "Rating: <span>" + Math.round((game.average_user_rating + Number.EPSILON) * 100) + " (" + game.num_user_ratings + " Ratings)</span>";
    const publisher = "Publisher: <span>" + game.primary_publisher + "</span>";
    const minAge = "Min Age: <span>" + game.min_age + "</span>";

    $(gameImage).attr("src", game.images.medium);
    $(title).html(game.name + "(" + game.year_published + ")");
    $(subTitle).html(rating + " " + publisher + " " + minAge);
    $(content).html(game.description_preview.slice(0,350) + "...");

    if(game.website === "") {
      $(website).html("Website: Not Available")
    } else {
      $(website).html("Website: <span>" + game.url + "</span>");
    }
    $(website).attr("data-id", game.id);

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
    $(largeCard).hide().fadeIn("slow");
  },

  renderLargeBoardGameCard(game) {},

  renderRecommendedBoardGameCard(game) {},



};