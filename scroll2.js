window.addEventListener("scroll", function () {
  var scrollLengthElement = document.querySelector(".scroll-length2");
  var scrollPosition = window.scrollY || window.pageYOffset;
  var imageElement = document.getElementById("scrollzawhez");
  var imageElement2 = document.getElementById("scrollzahando"); // Replace 'my-image' with the ID of your image element
  var minScrollPosition = 15000; // Adjust this value to set the distance at which the scroll starts
  var maxScrollPosition = minScrollPosition + 2800; // Adjust this value to set the distance at which the Scroll length 2 calculation pauses

  if (
    scrollPosition >= minScrollPosition &&
    scrollPosition <= maxScrollPosition
  ) {
    var speedFactor = 0.04; // Adjust this value to change the speed
    var offset = 0; // Adjust this value to offset the scroll position

    var scrollLength2 = Math.round(
      (scrollPosition - minScrollPosition) * speedFactor + offset
    );
    scrollLengthElement.textContent =
      // scrollPosition;
      "Scroll length 2: " + scrollLength2 + "px";
    imageElement.src = "imagus/whez/zahando/zawhez_" + scrollLength2 + ".png";
    imageElement2.src = "imagus/whez/zahando/zahando_" + scrollLength2 + ".png";
  } else if (scrollPosition > maxScrollPosition) {
    var fixedScrollLength2 = Math.round(
      (maxScrollPosition - minScrollPosition) / speedFactor
    );
    imageElement.src = "imagus/whez/zahando/zawhez_" + 113 + ".png";
    imageElement2.src = "imagus/whez/zahando/zahando_" + 113 + ".png";
  } else {
    scrollLengthElement.textContent = "Scroll length 2: 0px";
    imageElement.src = "imagus/whez/zahando/zawhez_0.png";
    imageElement2.src = "imagus/whez/zahando/zahando_0.png";
  }

  var scrollPosition = window.scrollY || window.pageYOffset;
  var scrollFadeElement = document.querySelector(".buttscroll-fade");

  // Adjust the value (100 in this case) to control when the fade-in effect starts
  if (scrollPosition > 17000) {
    scrollFadeElement.classList.add("buttfade-in");
  } else {
    scrollFadeElement.classList.remove("buttfade-in");
  }
});
