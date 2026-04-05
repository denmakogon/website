// Лабораторна 2.2 - Обробники подій
// Реалізація різними способами: HTML-атрибути, властивості об'єктів, методи W3C та Microsoft

console.log("Обробники подій ініціалізовані");

// 1. Події завантаження/розвантаження документу
// Через властивість об'єкта (W3C)
window.onload = function() {
    console.log("Документ завантажено (onload через властивість)");
};

// Через addEventListener (стандарт W3C)
window.addEventListener('unload', function() {
    console.log("Документ розвантажується (unload через addEventListener)");
});

// 2. Події гіперпосилань
// Демонструємо на існуючих посиланнях
// Через властивість об'єкта
var links = document.querySelectorAll('a');
for (var i = 0; i < links.length; i++) {
    links[i].onclick = function(e) {
        console.log("Клік по посиланню: " + this.href + " (через властивість onclick)");
        // e.preventDefault(); // можна розкоментувати для запобігання переходу
    };
}

// Через addEventListener (W3C)
links.forEach(function(link) {
    link.addEventListener('mouseover', function() {
        console.log("Наведення миші на посилання: " + this.textContent + " (addEventListener)");
    });
});

// 3. Події форми
// Отримуємо елементи форми
var nameInput = document.getElementById('name');
var passwordInput = document.getElementById('password');
var emailInput = document.getElementById('email');
var countrySelect = document.getElementById('country');
var submitBtn = document.querySelector('input[type="submit"]');


// Зміна вмісту через addEventListener (W3C)
if (passwordInput) {
    passwordInput.addEventListener('input', function() {
        console.log("Зміна вмісту поля паролю (input event через addEventListener)");
    });
}

if (emailInput) {
    emailInput.addEventListener('change', function() {
        console.log("Зміна поля email: " + this.value + " (change через addEventListener)");
    });
}

if (countrySelect) {
    countrySelect.addEventListener('change', function() {
        console.log("Вибрано країну: " + this.value + " (change через addEventListener)");
    });
}

// Виділення тексту через властивість об'єкта
if (nameInput) {
    nameInput.onselect = function() {
        console.log("Виділено текст у полі імені (onselect через властивість)");
    };
}

// 4. Події миші
// Переміщення курсору через addEventListener (W3C)
document.body.addEventListener('mousemove', function(e) {
    // Виводимо не завжди, щоб не засмічувати консоль
    if (Math.random() < 0.01) { // 1% шанс
        console.log("Переміщення миші: x=" + e.clientX + ", y=" + e.clientY + " (mousemove через addEventListener)");
    }
});

// Клік миші через властивість об'єкта
document.body.onclick = function(e) {
    console.log("Клік миші по body: x=" + e.clientX + ", y=" + e.clientY + " (onclick через властивість)");
};

// Клік по кнопці через addEventListener
if (submitBtn) {
    submitBtn.addEventListener('click', function(e) {
        console.log("Клік по кнопці Відправити (click через addEventListener)");
        // e.preventDefault(); // можна розкоментувати для запобігання відправки
    });
}



// 6. Додаткові події для демонстрації
// Подвійний клік через addEventListener
document.body.addEventListener('dblclick', function() {
    console.log("Подвійний клік по body (dblclick через addEventListener)");
});

// Клавіатура (для повноти)
document.body.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        console.log("Натиснуто Enter (keydown через addEventListener)");
    }
});

console.log("Всі обробники подій налаштовані");