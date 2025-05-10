const scanButton = document.getElementById('scanButton');
const scanResult = document.getElementById('scanResult');
const results = [
  "Здоров'я: 98% — стан стабільний",
  "Температура тіла: 42°C — у межах норми",
  "ДНК: частково знайома",
  "Рівень агресії: низький",
  "Мозкова активність: висока — розумна істота",
  "Вид: невідомий, можливо нова форма життя"
];

let scanned = false;

scanButton.addEventListener('click', () => {
  if (!scanned) {
    const randomIndex = Math.floor(Math.random() * results.length);
    scanResult.textContent = results[randomIndex];
    scanned = true;
    scanButton.textContent = 'Сканувати ще раз';
  } else {
    scanResult.textContent = 'Сканування завершено.';
    scanButton.disabled = true;
  }
});

document.getElementById('menuButton').onclick = () => {
  window.location.href = 'index2.html';
};
