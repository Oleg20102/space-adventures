const sequence = [];
let userInput = [];
let round = 1;
let isPlaying = false;
let mistakes = 0;
const maxRounds = 5;
const maxMistakes = 2;

const buttons = {
  btn1: document.getElementById('btn1'),
  btn2: document.getElementById('btn2'),
  btn3: document.getElementById('btn3'),
  btn4: document.getElementById('btn4')
};

const statusText = document.getElementById('status');
const startBtn = document.getElementById('start-btn');
const retryBtn = document.getElementById('retry-btn');

startBtn.addEventListener('click', startGame);
retryBtn.addEventListener('click', () => {
  if (retryBtn.dataset.type === "menu") {
    window.location.href = "index2.html";
  } else {
    startGame();
  }
});

Object.keys(buttons).forEach(id => {
  buttons[id].addEventListener('click', () => handleUserInput(id));
});

function startGame() {
  sequence.length = 0;
  userInput.length = 0;
  round = 1;
  mistakes = 0;
  isPlaying = true;
  statusText.textContent = '';
  retryBtn.style.display = 'none';
  nextRound();
}

function nextRound() {
  userInput = [];
  const randomBtn = `btn${Math.floor(Math.random() * 4 + 1)}`;
  sequence.push(randomBtn);
  statusText.textContent = `Раунд ${round}`;
  playSequence();
}

function playSequence() {
  let delay = 500;
  sequence.forEach((btnId, i) => {
    setTimeout(() => {
      highlightButton(btnId);
    }, delay * (i + 1));
  });
  setTimeout(() => {
    isPlaying = false;
  }, delay * sequence.length + 100);
}

function highlightButton(btnId) {
  buttons[btnId].classList.add('active');
  setTimeout(() => {
    buttons[btnId].classList.remove('active');
  }, 300);
}

function handleUserInput(btnId) {
  if (isPlaying) return;

  userInput.push(btnId);
  const index = userInput.length - 1;

  if (userInput[index] !== sequence[index]) {
    mistakes++;
    if (mistakes > maxMistakes) {
      endGame(false);
      return;
    } else {
      statusText.textContent = `Помилка! Спробуй ще (${mistakes} з ${maxMistakes})`;
      userInput = [];
      playSequence();
      return;
    }
  }

  if (userInput.length === sequence.length) {
    if (round >= maxRounds) {
      endGame(true);
    } else {
      round++;
      setTimeout(() => nextRound(), 800);
    }
  }
}

function endGame(won) {
  isPlaying = false;
  statusText.textContent = won ? '🎉 Ти переміг!' : '💀 Ти програв!';
  retryBtn.textContent = won ? 'Повернутися в меню' : 'Грати ще раз';
  retryBtn.dataset.type = won ? 'menu' : 'retry';
  retryBtn.style.display = 'inline-block';
}
document.getElementById('menu-btn').addEventListener('click', () => {
    window.location.href = "index2.html";
  });
  