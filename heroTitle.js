const heroTitle = document.querySelector(".hero-section .title");
const hours = new Date().getHours();
const greeting =
    hours < 12
        ? "Good Morning!"
        : hours < 18
        ? "Good Afternoon!"
        : "Good Evening!";
heroTitle.innerHTML = `${greeting} </br > Best Clothes`;
