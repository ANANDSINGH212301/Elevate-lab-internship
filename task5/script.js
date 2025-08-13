// Real-Time Clock
function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// Dark/Light Mode Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const btn = document.getElementById("themeToggle");
    btn.textContent = document.body.classList.contains("dark") ? "☀ Light Mode" : "🌙 Dark Mode";
});

// Quote Generator
const quotes = [
    "Believe you can and you're halfway there.",
    "Do something today that your future self will thank you for.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Happiness is not something ready-made. It comes from your own actions."
];
document.getElementById("quoteBtn").addEventListener("click", () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quoteDisplay").textContent = randomQuote;
});

// Scroll to Top Button
const scrollBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});
scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
