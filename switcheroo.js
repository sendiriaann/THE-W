// JavaScript (script.js)
const image = document.getElementById('img6');
const audio = document.getElementById('myAudio');
const replaceButton = document.getElementById('replaceButton');
let isImage1 = true;
let isAudioPlaying = false;

replaceButton.addEventListener('click', () => {
  if (isImage1) {
    image.src = '/imagus/tableLit.gif';
  } else {
    image.src = '/imagus/Table.png';
  }

  isImage1 = !isImage1;

  if (isAudioPlaying) {
    audio.pause();
    replaceButton.innerHTML = '⏵'; // Change button symbol to ⏵ when paused
  } else {
    audio.play();
    replaceButton.innerHTML = '⏸'; // Change button symbol to ⏸ when playing
  }

  isAudioPlaying = !isAudioPlaying;
});
