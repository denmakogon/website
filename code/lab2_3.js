// ЛР2.3 (2): реалізувати сценарій відкриття нового вікна та виведення в нього
// - створеного у динаміці довільного HTML-коду
// - існуючого HTML-файлу

document.addEventListener("DOMContentLoaded", () => {

    // --- 1. Відкриття нового вікна з динамічно створеним HTML ---
    const dynamicBtn = document.createElement("button");
    dynamicBtn.textContent = "Відкрити динамічне вікно";
    dynamicBtn.style.marginRight = "10px";

    dynamicBtn.addEventListener("click", () => {
        const newWindow = window.open("", "_blank", "width=600,height=400");

        const htmlContent = `
            <!DOCTYPE html>
            <html lang="uk">
            <head>
                <meta charset="UTF-8">
                <title>Динамічне вікно</title>
                <style>
                    body { font-family: Arial; text-align: center; padding: 20px; }
                    h1 { color: green; }
                </style>
            </head>
            <body>
                <h1>Це динамічно створена сторінка</h1>
                <p>Цей HTML був створений через JavaScript</p>
                <button onclick="window.close()">Закрити</button>
            </body>
            </html>
        `;

        newWindow.document.write(htmlContent);
        newWindow.document.close();
    });

    // --- 2. Відкриття існуючого HTML-файлу ---
    const staticBtn = document.createElement("button");
    staticBtn.textContent = "Відкрити HTML файл";

    staticBtn.addEventListener("click", () => {
        // тут вкажи шлях до існуючого файлу
        window.open("forest.html", "_blank");
    });

    // Додаємо кнопки на сторінку (наприклад, в кінець body)
    document.body.appendChild(dynamicBtn);
    document.body.appendChild(staticBtn);

});


// ЛР2.3 (3): розробити сценарій із застосуванням методів об'єкта window:
// setTimeout, setInterval, clearTimeout та clearInterval

document.addEventListener("DOMContentLoaded", () => {

    let timeoutId;
    let intervalId;
    let counter = 0;

    // --- Кнопка запуску setTimeout ---
    const startTimeoutBtn = document.createElement("button");
    startTimeoutBtn.textContent = "Запустити setTimeout";
    startTimeoutBtn.style.marginRight = "10px";

    startTimeoutBtn.addEventListener("click", () => {
        timeoutId = setTimeout(() => {
            alert("Повідомлення через 3 секунди (setTimeout)");
        }, 3000);
    });

    // --- Кнопка скасування setTimeout ---
    const stopTimeoutBtn = document.createElement("button");
    stopTimeoutBtn.textContent = "Зупинити setTimeout";
    stopTimeoutBtn.style.marginRight = "10px";

    stopTimeoutBtn.addEventListener("click", () => {
        clearTimeout(timeoutId);
        alert("setTimeout скасовано");
    });

    // --- Кнопка запуску setInterval ---
    const startIntervalBtn = document.createElement("button");
    startIntervalBtn.textContent = "Запустити setInterval";
    startIntervalBtn.style.marginRight = "10px";

    startIntervalBtn.addEventListener("click", () => {
        counter = 0;
        intervalId = setInterval(() => {
            counter++;
            console.log("Лічильник:", counter);
        }, 1000);
    });

    // --- Кнопка зупинки setInterval ---
    const stopIntervalBtn = document.createElement("button");
    stopIntervalBtn.textContent = "Зупинити setInterval";

    stopIntervalBtn.addEventListener("click", () => {
        clearInterval(intervalId);
        alert("setInterval зупинено");
    });

    // Додаємо кнопки на сторінку
    document.body.appendChild(document.createElement("hr"));
    document.body.appendChild(startTimeoutBtn);
    document.body.appendChild(stopTimeoutBtn);
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(startIntervalBtn);
    document.body.appendChild(stopIntervalBtn);

});



// ЛР2.3 (4): реалізувати сценарій створення об'єкта користувача
// (художній твір) з властивостями та методом виведення у нове вікно

document.addEventListener("DOMContentLoaded", () => {

    // --- Створення об'єкта ---
    const artwork = {
        title: "Лісова пісня",
        author: "Леся Українка",
        publisher: "Веселка",
        year: 1911,
        circulation: 5000,

        // --- Метод для виведення у нове вікно ---
        showInfo: function () {
            const newWindow = window.open("", "_blank", "width=500,height=400");

            const content = `
                <!DOCTYPE html>
                <html lang="uk">
                <head>
                    <meta charset="UTF-8">
                    <title>Інформація про твір</title>
                    <style>
                        body { font-family: Arial; padding: 20px; }
                        h2 { color: darkgreen; }
                    </style>
                </head>
                <body>
                    <h2>Інформація про художній твір</h2>
                    <p><b>Назва:</b> ${this.title}</p>
                    <p><b>Автор:</b> ${this.author}</p>
                    <p><b>Видавництво:</b> ${this.publisher}</p>
                    <p><b>Рік:</b> ${this.year}</p>
                    <p><b>Тираж:</b> ${this.circulation}</p>
                    <br>
                    <button onclick="window.close()">Закрити</button>
                </body>
                </html>
            `;

            newWindow.document.write(content);
            newWindow.document.close();
        }
    };

    // --- Кнопка для виклику методу ---
    const showBtn = document.createElement("button");
    showBtn.textContent = "Показати інформацію про твір";

    showBtn.addEventListener("click", () => {
        artwork.showInfo();
    });

    document.body.appendChild(document.createElement("hr"));
    document.body.appendChild(showBtn);

});


// ЛР2.3 (5): реалізувати сценарій із застосуванням методів об'єкта document:
// getElementById(), getElementsByTagName(), getElementsByName(),
// getElementsByClassName(), querySelector(), querySelectorAll(),
// createElement(), appendChild() і ін.

document.addEventListener("DOMContentLoaded", () => {

    // --- getElementById ---
    const formSection = document.getElementById("form-demo");
    formSection.style.border = "2px solid green";

    // --- getElementsByTagName ---
    const allParagraphs = document.getElementsByTagName("p");
    console.log("Всі <p>:", allParagraphs);

    // --- getElementsByClassName ---
    const subtitles = document.getElementsByClassName("subtitle");
    if (subtitles.length > 0) {
        subtitles[0].style.color = "darkblue";
    }

    // --- getElementsByName ---
    const genderRadios = document.getElementsByName("gender");
    console.log("Radio (gender):", genderRadios);

    // --- querySelector ---
    const firstButton = document.querySelector("button");
    if (firstButton) {
        firstButton.style.backgroundColor = "lightgreen";
    }

    // --- querySelectorAll ---
    const allLinks = document.querySelectorAll("a");
    allLinks.forEach(link => {
        link.style.textDecoration = "none";
    });

    // --- createElement + appendChild ---
    const newBlock = document.createElement("div");
    newBlock.style.marginTop = "20px";

    const title = document.createElement("h3");
    title.textContent = "Динамічно створений блок";

    const text = document.createElement("p");
    text.textContent = "Цей блок створено за допомогою JavaScript (createElement, appendChild).";

    newBlock.appendChild(title);
    newBlock.appendChild(text);

    document.body.appendChild(newBlock);

    // --- Додатково: створення списку ---
    const list = document.createElement("ul");

    const items = ["HTML", "CSS", "JavaScript"];

    items.forEach(itemText => {
        const li = document.createElement("li");
        li.textContent = itemText;
        list.appendChild(li);
    });

    newBlock.appendChild(list);

});


// ЛР2.3 (6): реалізувати сценарій із застосуванням об'єкта Date
// отримання: день тижня, місяць, рік, поточна дата і час
// встановлення: задана дата і час

document.addEventListener("DOMContentLoaded", () => {

    // --- Поточна дата і час ---
    const now = new Date();

    const days = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П’ятниця", "Субота"];
    const months = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень",
                    "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];

    const currentInfo = document.createElement("div");
    currentInfo.style.marginTop = "20px";

    currentInfo.innerHTML = `
        <h3>Поточна дата і час</h3>
        <p><b>Дата:</b> ${now.toLocaleDateString()}</p>
        <p><b>Час:</b> ${now.toLocaleTimeString()}</p>
        <p><b>День тижня:</b> ${days[now.getDay()]}</p>
        <p><b>Місяць:</b> ${months[now.getMonth()]}</p>
        <p><b>Рік:</b> ${now.getFullYear()}</p>
    `;

    document.body.appendChild(currentInfo);

    // --- Встановлення заданої дати ---
    const customDate = new Date();

    customDate.setFullYear(2025);
    customDate.setMonth(11); // грудень (0-11)
    customDate.setDate(25);
    customDate.setHours(10);
    customDate.setMinutes(30);
    customDate.setSeconds(0);

    const customInfo = document.createElement("div");
    customInfo.style.marginTop = "20px";

    customInfo.innerHTML = `
        <h3>Задана дата і час</h3>
        <p><b>Дата:</b> ${customDate.toLocaleDateString()}</p>
        <p><b>Час:</b> ${customDate.toLocaleTimeString()}</p>
        <p><b>День тижня:</b> ${days[customDate.getDay()]}</p>
        <p><b>Місяць:</b> ${months[customDate.getMonth()]}</p>
        <p><b>Рік:</b> ${customDate.getFullYear()}</p>
    `;

    document.body.appendChild(customInfo);

});

// ЛР2.3 (7): реалізувати сценарій із застосуванням об'єкта String
// використати методи: charAt, indexOf, link, substring, toUpperCase і ін.

document.addEventListener("DOMContentLoaded", () => {

    const text = "Природа України неймовірно красива";

    const resultBlock = document.createElement("div");
    resultBlock.style.marginTop = "20px";

    // --- Використання методів String ---
    const charExample = text.charAt(0); // перший символ
    const indexExample = text.indexOf("України"); // позиція слова
    const substringExample = text.substring(0, 8); // частина рядка
    const upperExample = text.toUpperCase(); // верхній регістр
    const lowerExample = text.toLowerCase(); // нижній регістр
    const linkExample = "Перейти на сайт".link("https://wikipedia.com"); // створення посилання

    resultBlock.innerHTML = `
        <h3>Робота з об'єктом String</h3>
        <p><b>Оригінальний текст:</b> ${text}</p>
        <p><b>charAt(0):</b> ${charExample}</p>
        <p><b>indexOf("України"):</b> ${indexExample}</p>
        <p><b>substring(0, 8):</b> ${substringExample}</p>
        <p><b>toUpperCase():</b> ${upperExample}</p>
        <p><b>toLowerCase():</b> ${lowerExample}</p>
        <p><b>link():</b> ${linkExample}</p>
    `;

    document.body.appendChild(resultBlock);

});