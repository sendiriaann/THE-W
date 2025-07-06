window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY || window.pageYOffset;
  var scrollFadeElement = document.querySelector(".buttscroll-fade");

  // Adjust the value (100 in this case) to control when the fade-in effect starts
  if (scrollPosition > 17000) {
    scrollFadeElement.classList.add("buttfade-in");
  } else {
    scrollFadeElement.classList.remove("buttfade-in");
  }
});