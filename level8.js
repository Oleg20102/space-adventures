// Правильний код
const correctCode = "1010"; // Ваш новий код

// Кількість спроб
let attempts = 0;

// Отримуємо елементи
const codeInput = document.getElementById('code-input');
const submitBtn = document.getElementById('submit-btn');
const message = document.getElementById('message');
const retryBtn = document.getElementById('retry-btn');
const menuBtn = document.getElementById('menu-btn');

// Функція перевірки коду
function checkCode() {
    const enteredCode = codeInput.value;

    // Перевірка коду
    if (enteredCode === correctCode) {
        // Відповідь правильна
        message.textContent = 'Код вірний! Система розблокована.';
        message.style.color = 'green';
        submitBtn.disabled = true;
        retryBtn.style.display = 'inline-block';  // Показуємо кнопку для повторної гри
    } else {
        // Відповідь неправильна
        attempts++;
        message.textContent = `Невірний код. Спроб залишилося: ${3 - attempts}`;
        message.style.color = 'red';

        if (attempts >= 3) {
            message.textContent = 'Ви не вгадали код. Гра закінчена.';
            message.style.color = 'red';
            submitBtn.disabled = true;
            retryBtn.style.display = 'inline-block';  // Показуємо кнопку для повторної гри
        }
    }
}

// Подія на кнопку "Підтвердити"
submitBtn.addEventListener('click', checkCode);

// Подія на кнопку "Грати ще раз"
retryBtn.addEventListener('click', () => {
    // Скидаємо спроби та очищуємо ввід
    attempts = 0;
    codeInput.value = '';
    message.textContent = '';
    retryBtn.style.display = 'none';
    submitBtn.disabled = false;
});

// Подія на кнопку "Повернутися в меню"
menuBtn.addEventListener('click', () => {
    window.location.href = 'index2.html';
});
