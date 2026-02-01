const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const heartsContainer = document.querySelector('.hearts');

const questionBox = document.getElementById('questionBox');
const videoBox = document.getElementById('videoBox');
const video = document.getElementById('valentineVideo');
const bgAudio = document.getElementById('bgAudio');
const bgAudio = document.getElementById('bgAudio');

// Play background audio once page is loaded
window.addEventListener('load', () => {
  bgAudio.play().catch(() => {
    // Autoplay with sound might be blocked until user interacts
    // So you can handle errors silently or show a “Click to play sound” message
  });
});

// NO button runs away on hover
noButton.addEventListener('mouseenter', () => {
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.position = 'absolute';
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});

// YES button fades out question, fades in video
yesButton.addEventListener('click', () => {
  questionBox.style.opacity = '0';
  questionBox.style.pointerEvents = 'none';
  
  //stops background music
bgAudio.pause();
  
  videoBox.classList.add('show');
  video.play();
});

// Floating hearts spawning on left or right edges
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  const side = Math.random() < 0.5 ? 'left' : 'right';
  const offset = Math.random() * 60; // px from edge

  if (side === 'left') {
    heart.style.left = `${offset}px`;
  } else {
    heart.style.left = `${window.innerWidth - offset - 30}px`;
  }

  heart.style.bottom = '-40px';
  heart.style.animationDuration = 3 + Math.random() * 3 + 's';

  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 300);




