const nightMode = {
  /**
   * Enables the dark mode.
   */
  enable() {
    $("body").addClass("night-mode");
    localStorage.setItem("nightMode", "enabled");
    $("#night-mode-toggle span").html("Change To Light Mode");
    $("#logo").attr("src", "assets/images/logo-dark-mode.png");
  },

  /**
   * Disables the dark mode.
   */
  disable() {
    $("body").removeClass("night-mode");
    localStorage.setItem("nightMode", "disabled");
    $("#night-mode-toggle span").html("Change To Dark Mode");
    $("#logo").attr("src", "assets/images/logo.png");
  },
};


// Check Local storage for nightMode if it is currently set to enabled then turn on dark mode.
if(localStorage.getItem("nightMode") === "enabled") {
  nightMode.enable();
}

// On Click of the dark mode icon it will toggle between dark and light mode.
$("#night-mode-toggle").on("click", function() {
  if(localStorage.getItem("nightMode") === "enabled") {
    nightMode.disable();
  } else {
    nightMode.enable();
  }
});
