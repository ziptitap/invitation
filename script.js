// Обратный отсчет
const weddingDate = new Date("2024-08-10T18:00:00").getTime(); // дату укажешь свою

const timerElement = document.getElementById("timer");

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        timerElement.innerHTML = "Той басталды!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerElement.innerHTML = `${days} күн ${hours} сағат ${minutes} минут ${seconds} секунд`;
}

setInterval(updateCountdown, 1000);

// Форма RSVP
const form = document.getElementById("rsvp-form");
const thankYou = document.getElementById("thank-you");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    // Здесь можно позже добавить отправку в Google Forms или Sheet
    form.style.display = "none";
    thankYou.style.display = "block";
});
