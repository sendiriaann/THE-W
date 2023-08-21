window.addEventListener("scroll", function () {
  var scrollLengthElement = document.querySelector(".scroll-length");
  var scrollPosition = window.scrollY || window.pageYOffset;
  var imageElement = document.getElementById("scrollwhez"); // Replace 'my-image' with the ID of your image element
  var minScrollPosition = 500; // Adjust this value to set the distance at which the scroll starts
  var maxScrollPosition = minScrollPosition + 12000; // Adjust this value to set the distance at which the scroll length calculation pauses

  if (
    scrollPosition >= minScrollPosition &&
    scrollPosition <= maxScrollPosition
  ) {
    var speedFactor = 0.01; // Adjust this value to change the speed
    var offset = 1; // Adjust this value to offset the scroll position

    var scrollLength = Math.round(
      (scrollPosition - minScrollPosition) * speedFactor + offset
    );
    scrollLengthElement.textContent = "Scroll Length: " + scrollLength + "px";
    imageElement.src = "imagus/whez/whez_" + scrollLength + ".png";
  } else if (scrollPosition > maxScrollPosition) {
    var fixedScrollLength = Math.round(
      (maxScrollPosition - minScrollPosition) / speedFactor
    );
    imageElement.src = "imagus/whez/whez_" + 1 + ".png";
  } else {
    scrollLengthElement.textContent = "Scroll Length: 0px";
    imageElement.src = "imagus/whez/whez_1.png";
  }

  var scrollPosition = window.scrollY || window.pageYOffset;
  var scrollFadeElement = document.querySelector(".scroll-fade");

  // Adjust the value (100 in this case) to control when the fade-out effect starts
  if (scrollPosition > 13000) {
    scrollFadeElement.classList.add("fade-out");
  } else {
    scrollFadeElement.classList.remove("fade-out");
  }
});
