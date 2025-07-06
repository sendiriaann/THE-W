// Image Sequence 1 (120 images)
var images1 = [];
for (var i = 1; i <= 120; i++) {
  var img = new Image();
  img.src = 'https://raw.githubusercontent.com/sendiriaann/THE-W/refs/heads/neo/imagus/whez/whez_' + i + '.png';
  img.alt = 'Seq1 Image ' + i;
  images1.push(img);
  document.getElementById("imageContainer1").appendChild(img);
}

// Image Sequence 2 (different amount, e.g. 80 images)
var images2 = [];
for (var i = 1; i <= 113; i++) {
  var img = new Image();
  img.src = 'https://raw.githubusercontent.com/sendiriaann/THE-W/refs/heads/neo/imagus/whez/zahando/zawhez_' + i + '.png';
  img.alt = 'Seq2 Image ' + i;
  images2.push(img);
  document.getElementById("imageContainer2").appendChild(img);
}

// Image Sequence 3 (different amount, e.g. 80 images)
var images3 = [];
for (var i = 1; i <= 113; i++) {
  var img = new Image();
  img.src = 'https://raw.githubusercontent.com/sendiriaann/THE-W/refs/heads/neo/imagus/whez/zahando/zahando_' + i + '.png';
  img.alt = 'Seq3 Image ' + i;
  images3.push(img);
  document.getElementById("imageContainer3").appendChild(img);
}

function updateScrollCounter() {
  // Get scroll position and body height as before
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;
  var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  var bodyHeight = parseInt(window.getComputedStyle(document.body).height, 10);
  var normalizedScroll = (scrollPosition / maxScroll) * bodyHeight;

  // Output raw scroll value as requested
  document.getElementById('scrollValue').textContent = normalizedScroll.toFixed(2);

  // Sequence 1 calculations (120 images)
  var imageStart1 = 1;
  var imageStop1 = 6000-1;
  var seqOneIndex = Math.floor((normalizedScroll - imageStart1) / (imageStop1 / images1.length));
  document.getElementById('imageIndex1').textContent = seqOneIndex;

  // Sequence 2 calculations (80 images)
  var imageStart2 = 6000;  // Different start
  var imageStop2 = 10001-6000;  // Different stop
  var seqTwoIndex = Math.floor((normalizedScroll - imageStart2) / (imageStop2 / images2.length));
  document.getElementById('imageIndex2').textContent = seqTwoIndex;

    // Sequence 3 calculations (80 images)
  var imageStart3 = 6000;  // Different start
  var imageStop3 = 10001-6000;  // Different stop
  var seqThreeIndex = Math.floor((normalizedScroll - imageStart3) / (imageStop3 / images3.length));
  document.getElementById('imageIndex3').textContent = seqThreeIndex;
  
  // Update visibility for both sequences
  for (var i = 0; i < images1.length; i++) {
    images1[i].style.opacity = i === seqOneIndex ? 1 : 0;
  }
  for (var i = 0; i < images2.length; i++) {
    images2[i].style.opacity = i === seqTwoIndex ? 1 : 0;
  }
    for (var i = 0; i < images3.length; i++) {
    images3[i].style.opacity = i === seqThreeIndex ? 1 : 0;
  }
}

window.addEventListener('scroll', updateScrollCounter);
updateScrollCounter();

// var scrollPosition = window.scrollY || window.pageYOffset;
// var scrollFadeElement = document.querySelector(".buttscroll-fade");

// // Adjust the value (100 in this case) to control when the fade-in effect starts
// if (scrollPosition > 17000) {
//   scrollFadeElement.classList.add("buttfade-in");
// } else {
//   scrollFadeElement.classList.remove("buttfade-in");
// }