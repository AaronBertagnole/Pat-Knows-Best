const lightMode = {
  /**
   * Enables the dark mode.
   */
  enable() {
    $("body").addClass("light-mode");
    localStorage.setItem("lightMode", "enabled");
    $("#light-mode-toggle span").html("Change To Dark Mode");
    $("#logo").attr("src", "assets/images/logo.png");
  },

  /**
   * Disables the dark mode.
   */
  disable() {
    $("body").removeClass("light-mode");
    localStorage.setItem("lightMode", "disabled");
    $("#light-mode-toggle span").html("Change To Light Mode");
    $("#logo").attr("src", "assets/images/logo-dark-mode.png");
  },
};


// Check Local storage for lightMode if it is currently set to enabled then turn on dark mode.
if(localStorage.getItem("lightMode") === "enabled") {
  lightMode.enable();
} else {
  lightMode.disable();
};

// On Click of the dark mode icon it will toggle between dark and light mode.
$("#light-mode-toggle").on("click", function() {
  if(localStorage.getItem("lightMode") === "enabled") {
    lightMode.disable();
  } else {
    lightMode.enable();
  }
});
