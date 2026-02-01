const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const heartsContainer = document.querySelector('.hearts');

// Move "No" button when hovered
noButton.addEventListener('mouseenter', () => {
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.position = 'absolute';
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});

// "Yes" button click
yesButton.addEventListener('click', () => {
  alert("Yay! 💖 I'm so happy you said yes!");
});

// Generate random floating hearts
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

// Make hearts continuously
setInterval(createHeart, 300);
