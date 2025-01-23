const saleSection = document.querySelector("#sale");
const countdownDisplay = document.createElement("div");
countdownDisplay.className = 'countdown';
saleSection.prepend(countdownDisplay);

const targetDate = new Date("2025-01-31T23:59:59");
const updateCountdown = () => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        countdownDisplay.textContent = "The sale has ended!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    countdownDisplay.textContent = `Sale ends in ${days}d ${hours}h ${minutes}m ${seconds}s`;
};

setInterval(updateCountdown, 1000);
updateCountdown();
