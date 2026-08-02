/* ==========================================
   TYPING ANIMATION
========================================== */

const words = [
    "ETQ Reliance Consultant",
    "ETQ Developer",
    "ETQ Administrator",
    "Production Support Engineer",
    "Quality Management Specialist"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex++);
    } else {

        typing.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex > currentWord.length) {

        deleting = true;
        speed = 1500;

    } else if (deleting && charIndex === 0) {

        deleting = false;
        wordIndex++;

        if (wordIndex === words.length) {

            wordIndex = 0;

        }

    }

    setTimeout(typeEffect, speed);

}

typeEffect();

/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

/* ==========================================
   NAVBAR BACKGROUND
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(7,17,31,.95)";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.3)";

    } else {

        header.style.background = "rgba(7,17,31,.75)";
        header.style.boxShadow = "none";

    }

});

/* ==========================================
   THEME TOGGLE
========================================== */

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        toggle.innerHTML = "☀️";

        localStorage.setItem("theme", "light");

    } else {

        toggle.innerHTML = "🌙";

        localStorage.setItem("theme", "dark");

    }

});

if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light-mode");

    toggle.innerHTML = "☀️";

}

/* ==========================================
   SCROLL REVEAL
========================================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ==========================================
   HERO CARD ANIMATION
========================================== */

document.querySelectorAll(".stat-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});
