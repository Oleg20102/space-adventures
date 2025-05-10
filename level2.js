const planetZone = document.getElementById('planetZone');
const result = document.getElementById('result');

const colors = ['red', 'blue', 'green', 'yellow'];
const correctIndex = Math.floor(Math.random() * 4);

function showPlanets() {
  planetZone.innerHTML = '';
  colors.forEach((color, i) => {
    const div = document.createElement('div');
    div.className = 'planet';
    div.style.backgroundColor = color;
    planetZone.appendChild(div);
  });

  // Зникнення через 5 секунд
  setTimeout(hidePlanets, 5000);
}

function hidePlanets() {
  planetZone.innerHTML = '';
  result.innerText = 'Обери справжню планету!';

  // Створити знову кнопки — але без кольору
  for (let i = 0; i < 4; i++) {
    const div = document.createElement('div');
    div.className = 'planet';
    div.style.backgroundColor = 'gray';
    div.addEventListener('click', () => checkAnswer(i));
    planetZone.appendChild(div);
  }
}

function checkAnswer(index) {
  if (index === correctIndex) {
    result.innerText = '✅ Вірно! Планета знайдена.';
    setTimeout(() => window.location.href = 'index2.html', 2000); // або наступний рівень
  } else {
    result.innerText = '❌ Невірно! Спробуй ще.';
  }
}

showPlanets();
