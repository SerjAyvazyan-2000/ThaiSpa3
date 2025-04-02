const burgerBox = document.querySelector('.burger-box');
const burger = document.querySelector('.burger');

const menu = document.querySelector('.menu');


document.addEventListener('DOMContentLoaded', function () {
    burgerBox.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    document.querySelectorAll('.menu-list a').forEach(link => {
        link.addEventListener("click", closeMenu);
    });


    function openMenu() {
        menu.classList.add('active');
        burger.classList.add('active');
        burgerBox.classList.add('active');


    }

    function closeMenu() {
        menu.classList.remove('active');
        burger.classList.remove('active');
        burgerBox.classList.remove('active');

    }


});

// document.querySelectorAll(".programs-slide-container").forEach(container => {
//     container.addEventListener("click", function () {
//         this.classList.toggle("active");
//     });
// });


function loadMap() {
    let script = document.createElement("script");
    script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A7859a5e2f3b783d663fa1d3c318b3cb60b675be17cc1fffe3f04db9e11e2c521&amp;width=100%&amp;height=400&amp;lang=ru_RU&amp;scroll=true";
    script.async = true;
    document.getElementById("yandex-map").appendChild(script);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            loadMap();
            observer.disconnect();
        }
    });
}, { threshold: 0.5 });

observer.observe(document.getElementById("yandex-map"));


document.querySelector(".feedback-request-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();

    if (name === "" || phone === "") {
        alert("Пожалуйста, заполните все поля!");
        return;
    }

    phone = phone.replace(/[\s()-]/g, "");

    const phoneRegex = /^(?:\+7|7|8)\d{10}$/;

    if (!phoneRegex.test(phone)) {
        alert("Неверный формат номера! Введите номер в формате +7XXXXXXXXXX, 7XXXXXXXXXX или 8XXXXXXXXXX.");
        return;
    }

    phone = phone.replace(/^8/, "+7").replace(/^7/, "+7");

    let botToken = "8156117895:AAFrmM9QQYvbUIyyLAT2yZFSXIpKSVmuCi8";
    let chatId = "2114847182";
    let text = `Имя - ${name}%0AТелефон - ${phone}`;

    let url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${text}`;

    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = true;

    const loadingIndicator = document.createElement("div");
    loadingIndicator.className = "loading-indicator";
    loadingIndicator.innerText = "Отправка...";
    document.body.appendChild(loadingIndicator);

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert("Заявка успешно отправлена!");
                document.querySelector(".feedback-request-form").reset();
            } else {
                alert("Ошибка при отправке!");
            }
        })
        .catch(error => {
            alert("Ошибка сети! Попробуйте позже.");
            console.error("Ошибка:", error);
        })
        .finally(() => {
            // Восстановить состояние кнопки и скрыть индикатор
            submitButton.disabled = false;
            document.body.removeChild(loadingIndicator);
        });
});

document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});


document.querySelectorAll('.footer-menu-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeModal = document.querySelector(".close");
    const body = document.body
    document.querySelectorAll(".gallery-slide img").forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImg.src = this.src;
            setTimeout(() => modal.style.opacity = "1", 10);
            body.style.overflow = "hidden";
        });
    });

    closeModal.addEventListener("click", function () {
        modal.style.opacity = "0";
        setTimeout(() => modal.style.display = "none", 300);
        body.style.overflow = "unset";

    });

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.opacity = "0";
            setTimeout(() => modal.style.display = "none", 300);
            body.style.overflow = "unset";

        }
    });
});


handleScroll();

function handleScroll() {
    const elements = document.querySelectorAll('.animation');
    elements.forEach(element => {
        const elementRect = element.getBoundingClientRect();
        const isElementVisible = elementRect.top < window.innerHeight && elementRect.bottom >= 0;

        if (isElementVisible) {
            if (!element.classList.contains('active')) {
                element.classList.add('active');
            }
        } else {
            if (element.classList.contains('active')) {
                element.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', handleScroll);


document.addEventListener("DOMContentLoaded", function () {
    const video = document.querySelector(".videoPlayer");
    if (video) {
        video.play().catch(error => console.warn("Autoplay error:", error));
    }
});


document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".programs-slide-container").forEach(container => {
        container.addEventListener("click", () => {
            container.classList.toggle("flipped");
        });
    });
});

// Получаем элементы
const video = document.getElementById('videoElement');
const playButton = document.getElementById('playButton');
const videoFon = document.getElementById('videoFon');

// При клике на кнопку play
playButton.addEventListener('click', () => {
    // Скрываем фон и кнопку play
    videoFon.style.display = 'none';
    playButton.style.display = 'none';

    // Показываем видео
    video.style.display = 'block';
    video.play(); // Начинаем воспроизведение видео
});

// Когда видео завершится
video.addEventListener('ended', () => {
    // Показываем фон и кнопку play снова
    videoFon.style.display = 'block';
    playButton.style.display = 'block';

    // Прячем видео
    video.style.display = 'none';
});