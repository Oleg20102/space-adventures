const correctSequence = [2, 4, 1, 3];
let playerSequence = [];
let eyes = document.querySelectorAll('.eye');
let message = document.getElementById('message');
let restartBtn = document.getElementById('restart-btn');

eyes.forEach(eye => {
  eye.addEventListener('click', () => {
    const id = parseInt(eye.getAttribute('data-id'));
    playerSequence.push(id);

    if (id === correctSequence[playerSequence.length - 1]) {
      eye.classList.add('correct');
    } else {
      eye.classList.add('incorrect');
      endGame(false);
      return;
    }

    if (playerSequence.length === correctSequence.length) {
      endGame(true);
    }
  });
});

function endGame(won) {
  if (won) {
    message.textContent = 'Ти пізнав істину!';
    restartBtn.textContent = 'Повернутись у меню';
    restartBtn.onclick = () => window.location.href = 'index2.html';
  } else {
    message.textContent = 'Ти помилився. Спробуй ще.';
    restartBtn.textContent = 'Грати ще раз';
    restartBtn.onclick = restartGame;
  }

  restartBtn.style.display = 'block';
  eyes.forEach(eye => eye.style.pointerEvents = 'none');
}

function restartGame() {
  playerSequence = [];
  message.textContent = '';
  restartBtn.style.display = 'none';
  eyes.forEach(eye => {
    eye.classList.remove('correct', 'incorrect');
    eye.style.pointerEvents = 'auto';
  });
}

document.getElementById('menu-btn').onclick = () => {
  window.location.href = 'index2.html';
};
