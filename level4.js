const player = document.getElementById('player');
const light = document.getElementById('player-light');
const goal = document.getElementById('goal');

// Створюємо багато перешкод
const obstacleCount = 20;
const darkZone = document.querySelector('.dark-zone');

for (let i = 0; i < obstacleCount; i++) {
  const obs = document.createElement('div');
  obs.classList.add('obstacle');
  obs.style.left = Math.random() * (window.innerWidth - 100) + 'px';
  obs.style.top = Math.random() * (window.innerHeight - 100) + 'px';
  darkZone.appendChild(obs);
}

const obstacles = document.querySelectorAll('.obstacle');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  // Центруємо астронавта відносно курсора
  player.style.left = x - 20 + 'px'; // ширина 40px
  player.style.top = y - 20 + 'px';

  light.style.left = x - 100 + 'px';
  light.style.top = y - 100 + 'px';

  if (checkCollision(player, goal)) {
    alert("🎉 Ви пройшли темну зону!");
    window.location.href = "index2.html";
  }

  for (let obs of obstacles) {
    if (checkCollision(player, obs)) {
      alert("💥 Ви врізались у перешкоду!");
      location.reload();
    }
  }
});

function checkCollision(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();
  return !(
    aRect.right < bRect.left ||
    aRect.left > bRect.right ||
    aRect.bottom < bRect.top ||
    aRect.top > bRect.bottom
  );
}
