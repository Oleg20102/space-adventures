function pressButton(btn) {
  btn.disabled = true;
  btn.style.opacity = '0.5';
  document.getElementById('result-message').textContent = 'Це не та кнопка!';
}

function winGame(btn) {
  btn.disabled = true;
  btn.style.opacity = '0.5';
  document.getElementById('result-message').textContent = 'Ти врятував станцію!';

  // Показати кнопки
  document.getElementById('retry-btn').style.display = 'inline-block';
  document.getElementById('menu-btn').style.display = 'inline-block';
}

function restartGame() {
  window.location.reload();
}

function goToMenu() {
  window.location.href = 'index2.html';
}
