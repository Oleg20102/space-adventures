// Отримуємо елементи
const gameArea = document.getElementById('game-area');
const player = document.getElementById('player');
const timerDisplay = document.getElementById('timer');
const winScreen = document.getElementById('win-screen');
const loseScreen = document.getElementById('lose-screen');

let playerX = window.innerWidth / 2;
let gameOver = false;
let timeLeft = 30;

// Рух гравця
document.addEventListener('mousemove', (e) => {
  if (!gameOver) {
    playerX = e.clientX;
    player.style.left = playerX + 'px';
  }
});

function createAsteroid() {
  if (gameOver) return;

  const asteroid = document.createElement('div');
  asteroid.classList.add('asteroid');
  asteroid.style.left = Math.random() * window.innerWidth + 'px';
  asteroid.style.top = '-40px';
  gameArea.appendChild(asteroid);

  let topPos = -40;
  const fall = setInterval(() => {
    if (gameOver) {
      clearInterval(fall);
      return;
    }

    topPos += 5;
    asteroid.style.top = topPos + 'px';

    const asteroidRect = asteroid.getBoundingClientRect();
    const playerRect = player.getBoundingClientRect();
    if (
      asteroidRect.bottom > playerRect.top &&
      asteroidRect.left < playerRect.right &&
      asteroidRect.right > playerRect.left
    ) {
      showLoseScreen();
      clearInterval(fall);
    }

    if (topPos > window.innerHeight) {
      asteroid.remove();
      clearInterval(fall);
    }
  }, 20);
}

function showWinScreen() {
  gameOver = true;
  clearInterval(asteroidInterval);
  clearInterval(countdown);
  winScreen.style.display = 'flex';
}

function showLoseScreen() {
  gameOver = true;
  clearInterval(asteroidInterval);
  clearInterval(countdown);
  loseScreen.style.display = 'flex';
}

function restartGame() {
  location.reload();
}

function goToMenu() {
  window.location.href = 'index2.html';
}

// Старт гри
const asteroidInterval = setInterval(createAsteroid, 800);

// Таймер на перемогу
const victoryTimeout = setTimeout(() => {
  if (!gameOver) {
    showWinScreen();
  }
}, 30000);

// Таймер зворотного відліку
const countdown = setInterval(() => {
  if (gameOver) {
    clearInterval(countdown);
    return;
  }

  timeLeft--;
  timerDisplay.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(countdown);
  }
}, 1000);
