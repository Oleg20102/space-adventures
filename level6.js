const correctAnswer = 2; // Пальне — правильна відповідь
let isAnswered = false;

function checkAnswer(answerId) {
  if (isAnswered) return; // Щоб не можна було клікати повторно після правильної

  const answers = document.querySelectorAll('.answer');
  answers.forEach(ans => ans.classList.remove('correct', 'incorrect'));

  const resultMessage = document.getElementById('result-message');
  const retryBtn = document.getElementById('retry-btn');

  if (answerId === correctAnswer) {
    document.getElementById('answer' + answerId).classList.add('correct');
    resultMessage.textContent = 'Вірно!';
    isAnswered = true;

    // Показати кнопку "Повернутися в меню"
    retryBtn.textContent = 'Повернутися в меню';
    retryBtn.onclick = () => {
      window.location.href = 'index2.html';
    };
    retryBtn.style.display = 'inline-block';

  } else {
    document.getElementById('answer' + answerId).classList.add('incorrect');
    resultMessage.textContent = 'Невірно!';
  }
}

function restartGame() {
  const answers = document.querySelectorAll('.answer');
  answers.forEach(ans => ans.classList.remove('correct', 'incorrect'));

  document.getElementById('result-message').textContent = '';
  document.getElementById('retry-btn').style.display = 'none';
  isAnswered = false;
}
