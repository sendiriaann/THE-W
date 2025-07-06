// JavaScript (script.js)
document.addEventListener("DOMContentLoaded", function() {
    const audioElement = document.getElementById("myAudio");
    const volume = localStorage.getItem("audioVolume");
  
    if (volume) {
      audioElement.volume = parseFloat(volume);
    } else {
      audioElement.volume = 0.1; // Default volume if no previous setting
    }
  
    audioElement.addEventListener("play", function() {
      localStorage.setItem("audioVolume", audioElement.volume);
    });
  
    audioElement.play();
  });
  

window.onload = function() {
    document.getElementById("myAudio").play();
}