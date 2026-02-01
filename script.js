const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const heartsContainer = document.querySelector('.hearts');

const questionBox = document.getElementById('questionBox');
const videoBox = document.getElementById('videoBox');
const video = document.getElementById('valentineVideo');

// Make NO button run away
noButton.addEventListener('mouseenter', () => {
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.position = 'absolute';
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});

// YES → show video
yesButton.addEventListener('click', () => {
  questionBox.style.display = 'none';
  videoBox.style.display = 'flex';
  video.play();
});

// Floating hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.animationDuration = 3 + Math.random() * 3 + 's';
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 300);

