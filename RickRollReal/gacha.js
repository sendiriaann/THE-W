// JavaScript (script.js)

const pools = {
  A: ["A1.png", "A2.png", "A3.png", "A4.png", "A5.png", "A6.png", "A7.png", "A8.png", "A9.png", "A10.png", "A11.png", "A12.png", "A13.png", "A14.png", "A15.png", "A16.png", "A17.png"],
  B: ["B1.png", "B2.png", "B3.png", "B4.png", "B5.png", "B6.png", "B7.png", "B8.png", "B9.png", "B10.png", "B11.png", "B12.png", "B13.png", "B14.png", "B15.png", "B16.png", "B17.png"],
  C: ["C1.png", "C2.png", "C3.png", "C4.png"],
  D: ["D1.png", "D2.png", "D3.png", "D4.png"],
  E: ["E1.png", "E2.png", "E3.png", "E4.png"],
  F: ["F1.png", "F2.png", "F3.png", "F4.png"],
  G: ["G1.png", "G2.png", "G3.png", "G4.png"],
};

let clickCount = 0;
let clickRate = 0;
const clickThreshold = 3; // Minimum clicks per second to trigger redirect

function checkClickRate() {
  clickCount = 0;
}

function getRandomImageFromPool(pool) {
  const shuffledPool = shuffleArray(pool);
  return shuffledPool[0];
}

function shuffleArray(array) {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function combineImages() {
  const canvas = document.getElementById("resultCanvas");
  const context = canvas.getContext("2d");

  // Set the canvas background to transparent
  canvas.style.backgroundColor = "transparent";

  // Clear the canvas by filling it with a transparent color
  context.clearRect(0, 0, canvas.width, canvas.height);

  const images = [];
  const reversedPools = Object.keys(pools).reverse();
  const loadingText = document.getElementById("loadingText");

  for (let poolName of reversedPools) {
    const pool = pools[poolName];
    const imageSrc = 'images' + '/' + getRandomImageFromPool(pool);

    try {
      const image = await loadImage(imageSrc);
      images.push(image);

      // Update loading progress
      const progress = Math.round((images.length / reversedPools.length) * 100);
      loadingText.textContent = `Loading... ${progress}%`;

      // Add a random loading delay before processing the next pool
      const loadingDurations = [100, 300, 1000]; // 1s, 2s, 3s
      const randomDuration = loadingDurations[Math.floor(Math.random() * loadingDurations.length)];
      await sleep(randomDuration);
    } catch (error) {
      console.error("Error loading image:", imageSrc);
    }
  }

  // Draw all loaded images on the canvas
  images.forEach((image) => {
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
  });

  // Hide loading text
  loadingText.textContent = "";

}

function generateImage() {
  clickCount++;

  if (clickCount >= clickThreshold) {
    // Redirect to page2.html when the click rate is above the threshold
    window.location.href = "doNOT.html";
    return;
  }

  // Show loading text and start combining images
  const loadingText = document.getElementById("loadingText");
  loadingText.textContent = "Loading... 0%";
  combineImages();
}

// Reset click count every second and update the click rate
setInterval(() => {
  clickRate = clickCount;
  clickCount = 0;
  updateClickRateUI();
}, 1000);

function updateClickRateUI() {
  const clickRateElement = document.getElementById("clickRate");
  clickRateElement.textContent = clickRate;
}

// Get references to the button and the hidden text element
const showButton = document.getElementById("showButton");
const hiddenText = document.getElementById("hiddenText");

// Add a click event listener to the button
showButton.addEventListener("click", function() {
  // Show the hidden text
  hiddenText.style.display = "block";
});