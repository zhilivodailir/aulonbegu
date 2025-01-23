const scrollToTopButton = document.createElement("button");
scrollToTopButton.textContent = "↑";
scrollToTopButton.className = "scroll-to-top";
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
    scrollToTopButton.style.display = window.scrollY > 200 ? "block" : "none";
});