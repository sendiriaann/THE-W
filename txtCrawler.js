// JavaScript (script.js)

// The complete message to be shown with the typing effect
const completeMessage = "<p>Life�sizeAnimatronics��</p>";

function startTypingEffect() {
  const typingTextElement = document.getElementById("typingText");
  const elapsedTimeElement = document.getElementById("elapsedTime");

  let currentIndex = 0;

  function typeNextCharacter() {
    if (currentIndex < completeMessage.length) {
      typingTextElement.textContent += completeMessage.charAt(currentIndex);
      currentIndex++;

      // Repeat the function with a random typing speed (between 50 to 200 ms)
      const typingSpeed = Math.random() * (200 - 50) + 50;
      setTimeout(typeNextCharacter, typingSpeed);
    } else {
      // Typing animation is complete, calculate elapsed time and update the message
      const currentTime = new Date();
      const elapsedTimeInSeconds = Math.floor((currentTime - stockTakenTime) / 1000);
      const elapsedMinutes = Math.floor(elapsedTimeInSeconds / 60);
      const elapsedSeconds = elapsedTimeInSeconds % 60;

      elapsedTimeElement.textContent = `${elapsedMinutes}m ${elapsedSeconds}s`;
    }
  }

  // Start the typing animation when the element is visible in the viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        typeNextCharacter();
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(typingTextElement);
}

// Call the startTypingEffect function when the page loads
window.onload = startTypingEffect;




// glitch
const textElement = document.getElementById("glitchText");
const originalText = textElement.innerText;
let glitchInterval;

function getRandomCharacter() {
  const characters = "0123456789!@#$%^&*()_+-=[]{}|;':,.<>?";
  return characters[Math.floor(Math.random() * characters.length)];
}

function glitchText() {
  let newText = "";
  for (let i = 0; i < originalText.length; i++) {
    if (Math.random() < 0.5) {
      newText += getRandomCharacter();
    } else {
      newText += originalText.charAt(i);
    }
  }
  textElement.innerText = newText;
}

function showOriginalText() {
  textElement.innerText = originalText;
}

function startGlitch() {
  glitchInterval = setInterval(glitchText, 100); // Change the interval (20 times per second)
}

function stopGlitch() {
  clearInterval(glitchInterval);
  if (Math.random() < 0.9) {
    setTimeout(showOriginalText, 2000); // Show the original text at random intervals
  } else {
    startGlitch();
  }
}

startGlitch(); // Start the glitch effect

