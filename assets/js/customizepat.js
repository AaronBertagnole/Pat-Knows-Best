
  // JavaScript (jQuery) example
  var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://avatargen.io/api/generator",
      "method": "POST",
      "headers": {
          "content-type": "application/x-www-form-urlencoded",
          "cache-control": "no-cache"
          "apiKey": "MY_API_KEY"
      },
      "data": { // from your users
          "gender": $("#gender").val(),
          "skin_tone": $("#skin-tone").val(),
          "head_shape": $("#head-shape").val(),
          "hair_length": $("#hair-length").val(),
          "hair_color": $("#hair-color").val(),
          "hair_type": $("#hair-type").val(),
          "hair_style": $("#hair-style").val(),
          "eye_color": $("#eye-color").val(),
          "glasses": $("#glasses").val(),
          "body_type": $("#body-type").val()
      }
  };

  $.ajax(settings).done(function (response) {
      console.log(response.avatar); // >> "data:image/png;base64,somechars=="
      // $("img").attr("src", response.avatar);
      localStorage.setItem("avatar", response.avatar);
      $("#pat").attr("src", localStorage.getItem("avatar"));
  });

  $(".form-control").change(function () {
  console.log("It changed!");
  $.ajax(settings).done(function (response) {
    console.log(response.avatar); 
    localStorage.setItem("avatar", response.avatar);
    $("#pat").attr("src", localStorage.getItem("avatar"));
});
});

if ()

$('.open-modal').click(function(event) {
    $(this).modal({
      fadeDuration: 250
    });
    return false;
  });






  




