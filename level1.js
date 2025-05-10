const correctOrder = ['2', '3', '1'];
let playerInput = [];

const spheres = document.querySelectorAll('.sphere');
const result = document.getElementById('result');

spheres.forEach(sphere => {
  sphere.addEventListener('click', () => {
    const id = sphere.getAttribute('data-id');
    playerInput.push(id);
    checkInput();
  });
});

function checkInput() {
  const currentIndex = playerInput.length - 1;

  if (playerInput[currentIndex] !== correctOrder[currentIndex]) {
    showError();
    return;
  }

  if (playerInput.length === correctOrder.length) {
    showSuccess();
  }
}

function showSuccess() {
  result.textContent = '✅ Енергія відновлена!';
  result.style.color = '#00ff66';
  spheres.forEach(s => s.classList.add('correct'));
}

function showError() {
  result.textContent = '❌ Невірна послідовність! Спробуй ще раз.';
  result.style.color = 'red';
  spheres.forEach(s => {
    s.classList.add('error');
    setTimeout(() => s.classList.remove('error'), 600);
  });
  playerInput = [];
}
