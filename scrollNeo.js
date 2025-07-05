// Create an array to hold image elements
var images = [];

// Populate the images array with 120 images
i = Math.max(1, Math.min(i, 120));
for (var i = 1; i <= 120; i++) {
  var image = new Image();
  image.src = 'https://raw.githubusercontent.com/sendiriaann/THE-W/refs/heads/main/imagus/whez/whez_' + i + '.png';
  image.alt = 'Image ' + i;
  images.push(image);
}

// Append all images to the image container
var imageContainer = document.getElementById('imageContainer');
images.forEach(function (img) {
  imageContainer.appendChild(img);
});

// Get the scroll position and update the counter and image opacity
function updateScrollCounter() {
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;

  // Get the maximum scroll position dynamically
  var maxScroll = document.documentElement.scrollHeight - window.innerHeight;

  // Get the height of the body element from the computed style
  var bodyHeight = parseInt(window.getComputedStyle(document.body).height, 10);

  // Normalize the scroll position based on the body height
  var normalizedScroll = (scrollPosition / maxScroll) * bodyHeight;

  var seqOneIndex = Math.floor((normalizedScroll - 100) / ((6000-100) / images.length));

  document.getElementById('scrollValue').textContent = normalizedScroll.toFixed(2);
  
  document.getElementById('imageIndex').textContent = seqOneIndex;

  // Set opacity for each image based on the current image
  for (var i = 0; i < images.length; i++) {
    images[i].style.opacity = i === seqOneIndex ? 1 : 0;
  }
}

// Attach the updateScrollCounter function to the scroll event
window.addEventListener('scroll', updateScrollCounter);

// Initial call to set the initial scroll position
updateScrollCounter();
