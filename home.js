/* ==========================================
   TYPING ANIMATION
========================================== */

const words = [
    "ETQ Reliance Consultant",
    "ETQ Developer",
    "ETQ Administrator",
    "ETQ Support"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    if (!typing) return;

    const current = words[wordIndex];

    if (!deleting) {
        typing.textContent = current.substring(0, charIndex++);
    } else {
        typing.textContent = current.substring(0, charIndex--);
    }

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex > current.length) {

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
   THEME TOGGLE
========================================== */

const themeBtn = document.getElementById("themeToggle");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            themeBtn.innerHTML = "☀️";
            localStorage.setItem("theme", "light");

        } else {

            themeBtn.innerHTML = "🌙";
            localStorage.setItem("theme", "dark");

        }

    });

    if (localStorage.getItem("theme") === "light") {

        document.body.classList.add("light-mode");
        themeBtn.innerHTML = "☀️";

    }

}

/* ==========================================
   FADE IN ANIMATION
========================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, { threshold: 0.2 });

document.querySelectorAll(".hero,.quick,footer").forEach(section => {

    section.classList.add("hidden");
    observer.observe(section);

});

/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

document.querySelectorAll(".primary,.secondary").forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-6px) scale(1.03)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0) scale(1)";
    });

});

/* ==========================================
   IMAGE TILT EFFECT
========================================== */

const image = document.querySelector(".image-card");

if (image) {

    image.addEventListener("mousemove", (e) => {

        const x = e.offsetX;
        const y = e.offsetY;

        const rotateY = (x - 200) / 20;
        const rotateX = (200 - y) / 20;

        image.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";

    });

}

/* ==========================================
   SMOOTH PAGE TRANSITION
========================================== */

const primaryBtn = document.querySelector(".primary");

if (primaryBtn) {

    primaryBtn.addEventListener("click", function (e) {

        e.preventDefault();

        document.body.style.opacity = "0";

        setTimeout(() => {

            window.location.href = this.href;

        }, 500);

    });

}

// Show page when loaded
window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

// Show page when returning using browser Back button
window.addEventListener("pageshow", () => {

    document.body.style.opacity = "1";

});

/* ==========================================
   SHOW DOWNLOAD HELP AFTER CLICK
========================================== */

const downloadBtn = document.getElementById("downloadResume");
const downloadNote = document.getElementById("downloadNote");

if (downloadBtn && downloadNote) {

    downloadBtn.addEventListener("click", () => {

        downloadNote.classList.add("show");

    });

}
