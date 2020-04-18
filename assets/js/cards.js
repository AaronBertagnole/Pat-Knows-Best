cards = {
  renderLargeVideoGameCard(game) {
    const largeCard = $('<div class="col-12 mb-3">');
    const box = $('<div class="box">');
    const boxRow = $('<div class="row no-gutters">');
    const gameImageContainer = $('<div class="col-2">');
    const gameImage = $('<img class="img-fluid float-left" src="" alt="" />');
    const bodyContainer = $('<div class="col-10">');
    const body = $('<div class="body float-left">');
    const title = $('<h2 class="title">');
    const subTitle = $('<h4 class="sub-title">');
    const content = $('<div class="content">');
    const footerRow = $('<div class="row">');
    const footerContainer = $('<div class="col-12 text-right">');
    const website = $("<div class='website'>");
    const websiteLink = $('<a href="#" target="_blank">');

    let genresText = "";
    for (let i = 0; i < game.genres.length; i++) {
      if (i === game.genres.length - 1) {
        genresText += game.genres[i].name;
      } else {
        genresText += game.genres[i].name + ", ";
      }
    }

    const rating = "Rating: <span>" + game.rating + " (" + game.ratings_count + " Ratings)</span>";
    const genres = "Genres: <span>" + genresText + "</span>";
    const releaseYear = moment(game.released, "YYYY-MM-DD").year();

    $(gameImage).attr("src", game.background_image);
    $(title).html(game.name + " (" + releaseYear + ")");
    $(subTitle).html(rating + " " + genres);

    $(content).html(game.description_raw.slice(0,350) + "...");

    console.log("website: ", game.website);
    if(game.website === "") {
      $(website).html("Website: Not Available")
    } else {
      $(website).html("Website: ");
      $(websiteLink).html(game.website);
      $(websiteLink).attr("href", game.website);
    }

    $(websiteLink).appendTo(website);
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

    $(largeCard).appendTo($("#search-results .results .row"));
    $(largeCard).hide().fadeIn("slow");
  },

  renderSearchVideoGameCard(game) {
    const smallCard = $('<div class="col-4">');
    const box = $('<div class="box small">');
    const body = $('<div class="body">');
    const title = $('<h2 class="title"></h2>');
    // make title link to website ?
    const subTitle = $('<h4 class="sub-title">');
    const content = $('<div class="content">');
    const footerRow = $('<div class="row">');
    const footerContainer = $('<div class="col-12 text-center">');
    const getRecommendation = $('<a href="#" class="get-recommendation">');
    const gameImage = $('<img src="" alt=""/>');

    let genresText = "";
    for (let i = 0; i < game.genres.length; i++) {
      if (i === game.genres.length - 1) {
        genresText += game.genres[i].name;
      } else {
        genresText += game.genres[i].name + ", ";
      }
    }

    const rating = "Rating: <span>" + game.rating + " (" + game.ratings_count + " Ratings)</span>";
    const genres = "Genres: <span>" + genresText + "</span>";
    const releaseYear = moment(game.released, "YYYY-MM-DD").year();


    $(gameImage).attr("src", game.background_image);
    $(title).html(game.name + " (" + releaseYear + ")");
    $(subTitle).html(rating + " " + genres);
    $(content).html(game.description_raw.slice(0, 315) + "...");
    $(getRecommendation).html('<i class="fa fa-plus"></i> Get Recommendation').attr("data-id", game.id);;
    $(getRecommendation).attr("data-type", "video-game");

    $(getRecommendation).appendTo(footerContainer);
    $(footerContainer).appendTo(footerRow);
    $(gameImage).appendTo(box);
    $(title).appendTo(body);
    $(subTitle).appendTo(body);
    $(content).appendTo(body);
    $(footerRow).appendTo(body);
    $(body).appendTo(box);
    $(box).appendTo(smallCard);

    $(smallCard).appendTo($("#search-results > .results > .row"));
  },

  renderRecommendedVideoGameCard(game) {
    const smallCard = $('<div class="col-4">');
    const box = $('<div class="box small">');
    const body = $('<div class="body">');
    const title = $('<h2 class="title"></h2>');
    const subTitle = $('<h4 class="sub-title">');
    const content = $('<div class="content">');
    const footerRow = $('<div class="row">');
    const footerContainer = $('<div class="col-12 text-center">');
    const notInterested = $('<a href="#" class="not-interested">');
    const gameImage = $('<img src="" alt=""/>');

    let genresText = "";
    for (let i = 0; i < game.genres.length; i++) {
      if (i === game.genres.length - 1) {
        genresText += game.genres[i].name;
      } else {
        genresText += game.genres[i].name + ", ";
      }
    }

    const rating = "Rating: <span>" + game.rating + " (" + game.ratings_count + " Ratings)</span>";
    const genres = "Genres: <span>" + genresText + "</span>";
    const releaseYear = moment(game.released, "YYYY-MM-DD").year();


    $(gameImage).attr("src", game.background_image);
    $(title).html(game.name + " (" + releaseYear + ")");
    $(subTitle).html(rating + " " + genres);
    $(content).html(game.description_raw.slice(0, 315) + "...");
    $(notInterested).html('<i class="fa fa-refresh"></i> Not Interested');
    $(notInterested).attr("data-type", "video-game");

    $(notInterested).appendTo(footerContainer);
    $(footerContainer).appendTo(footerRow);
    $(gameImage).appendTo(box);

    $(title).appendTo(body);
    $(subTitle).appendTo(body);
    $(content).appendTo(body);
    $(footerRow).appendTo(body);


    $(body).appendTo(box);
    $(box).appendTo(smallCard);

    $(smallCard).appendTo($("#pats-recommendations > .results > .row"));
  },

  renderLargeBoardGameCard(game) {
    const largeCard = $('<div class="col-12 mb-3">');
    const box = $('<div class="box">');
    const boxRow = $('<div class="row no-gutters">');
    const gameImageContainer = $('<div class="col-2">');
    const gameImage = $('<img class="img-fluid float-left" src="" alt="" />');
    const bodyContainer = $('<div class="col-10">');
    const body = $('<div class="body float-left">');
    const title = $('<h2 class="title">');
    const subTitle = $('<h4 class="sub-title">');
    const content = $('<div class="content">');
    const footerRow = $('<div class="row">');
    const footerContainer = $('<div class="col-12 text-right">');
    const website = $("<div class='website'>");
    const websiteLink = $('<a href="#" target="_blank">');


    const rating = "Rating: <span>" + Math.round((game.average_user_rating + Number.EPSILON ) * 100) + " (" + game.num_user_ratings + " Ratings)</span>";
    const publisher = "Publisher: <span>" + game.primary_publisher + "</span>";
    const minAge = "Min Age: <span>" + game.min_age + "</span>";
    const releaseYear = game.year_published;

    $(gameImage).attr("src", game.images.medium);
    $(title).html(game.name + " (" + releaseYear + ")");
    $(subTitle).html(rating + " " + publisher + " " + minAge);

    $(content).html(game.description_preview.slice(0,350) + "...");

    if(game.url === "") {
      $(website).html("Website: Not Available")
    } else {
      $(website).html("Website: ");
      $(websiteLink).html(game.url);
      $(websiteLink).attr("href", game.url);
    }

    $(websiteLink).appendTo(website);
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

    $(largeCard).appendTo($("#search-results .results .row"));
    $(largeCard).hide().fadeIn("slow");
  },

  renderSearchBoardGameCard(game) {
    const smallCard = $('<div class="col-4">');
    const box = $('<div class="box small">');
    const body = $('<div class="body">');
    const title = $('<h2 class="title">');
    const subTitle = $('<h4 class="sub-title">');
    const content = $('<div class="content">');
    const footerRow = $('<div class="row">');
    const footerContainer = $('<div class="col-12 text-center">');
    const getRecommendation = $('<a href="#" class="get-recommendation">');
    const gameImage = $('<img src="" alt=""/>');


    const rating = "Rating: <span>" + Math.round((game.average_user_rating + Number.EPSILON ) * 100) + " (" + game.num_user_ratings + " Ratings)</span>";
    const publisher = "Publisher: <span>" + game.primary_publisher + "</span>";
    const minAge = "Min Age: <span>" + game.min_age + "</span>";
    const releaseYear = game.year_published;


    $(gameImage).attr("src", game.images.medium);
    $(title).html(game.name + " (" + releaseYear + ")");
    $(subTitle).html(rating + " " + publisher + " " + minAge);
    $(content).html(game.description_preview.slice(0, 315) + "...");
    $(getRecommendation).html('<i class="fa fa-plus"></i> Get Recommendation').attr("data-id", game.id);;

    $(getRecommendation).appendTo(footerContainer);
    $(footerContainer).appendTo(footerRow);
    $(gameImage).appendTo(box);
    $(title).appendTo(body);
    $(subTitle).appendTo(body);
    $(content).appendTo(body);
    $(footerRow).appendTo(body);
    $(body).appendTo(box);
    $(box).appendTo(smallCard);

    $(smallCard).appendTo($("#search-results > .results > .row"));
  },

  renderRecommendedBoardGameCard(game) {
    const smallCard = $('<div class="col-4">');
    const box = $('<div class="box small">');
    const body = $('<div class="body">');
    const title = $('<h2 class="title">');
    const subTitle = $('<h4 class="sub-title">');
    const content = $('<div class="content">');
    const footerRow = $('<div class="row">');
    const footerContainer = $('<div class="col-12 text-center">');
    const notInterested = $('<a href="#" class="not-interested">');
    const gameImage = $('<img src="" alt=""/>');



    const rating = "Rating: <span>" + Math.round((game.average_user_rating + Number.EPSILON ) * 100) + " (" + game.num_user_ratings + " Ratings)</span>";
    const publisher = "Publisher: <span>" + game.primary_publisher + "</span>";
    const minAge = "Min Age: <span>" + game.min_age + "</span>";
    const releaseYear = game.year_published;


    $(gameImage).attr("src", game.images.medium);
    $(title).html(game.name + " (" + releaseYear + ")");
    $(subTitle).html(rating + " " + publisher + " " + minAge);
    $(content).html(game.description_preview.slice(0, 315) + "...");
    $(notInterested).html('<i class="fa fa-refresh"></i> Not Interested');

    $(notInterested).appendTo(footerContainer);
    $(footerContainer).appendTo(footerRow);
    $(gameImage).appendTo(box);

    $(title).appendTo(body);
    $(subTitle).appendTo(body);
    $(content).appendTo(body);
    $(footerRow).appendTo(body);


    $(body).appendTo(box);
    $(box).appendTo(smallCard);

    $(smallCard).appendTo($("#pats-recommendations > .results > .row"));
  },

};