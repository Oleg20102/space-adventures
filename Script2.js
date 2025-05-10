const starsContainer = document.getElementById('stars-bg');

// Створення зірок на фоні
for (let i = 0; i < 150; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';
  starsContainer.appendChild(star);
}

function goToLevel(level) {
  if (level === 1) {
    location.assign('level1.html');
  } else if (level === 2) {
    location.assign('level2.html');
  } else if (level === 3) {
    location.assign('level3.html'); // <-- тепер є третій рівень!
  } else if (level === 4) {
    location.assign('level4.html');
  } else if (level === 5) {
    location.assign('level5.html');
  } else if (level === 6) {
    location.assign('level6.html');
  } else if (level === 7) {
    location.assign('level7.html');
  } else if (level === 8) {
    location.assign('level8.html');
    } else if (level === 9) {
    location.assign('level9.html');
    } else if (level === 10) {
    location.assign('level10.html');
  } else {
    alert("Цей рівень ще не готовий!");
  }
}