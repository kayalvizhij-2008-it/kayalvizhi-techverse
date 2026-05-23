/* ========================================================= */
/* ================= TYPING ANIMATION ====================== */
/* ========================================================= */

const typed = new Typed("#typed", {

    strings: [

        "Frontend Developer",
        "AI Enthusiast",
        "Creative Problem Solver",
        "Future Software Engineer"

    ],

    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1800,

    loop: true

});


/* ========================================================= */
/* ================= AOS ANIMATION ========================= */
/* ========================================================= */

AOS.init({

    duration: 1000,
    once: true,
    offset: 120

});


/* ========================================================= */
/* ================= NAVBAR ACTIVE LINK ==================== */
/* ========================================================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }

    });

});


/* ========================================================= */
/* ================= NAVBAR BLUR EFFECT ==================== */
/* ========================================================= */

const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(7, 11, 20, 0.92)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.25)";

    } else {

        navbar.style.background = "rgba(7, 11, 20, 0.7)";
        navbar.style.boxShadow = "none";

    }

});


/* ========================================================= */
/* ================= CUSTOM CURSOR ========================= */
/* ========================================================= */

const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});


/* ========================================================= */
/* ================= CURSOR HOVER EFFECT =================== */
/* ========================================================= */

const hoverElements = document.querySelectorAll(

    "a, button, .skill-card, .project-card, .stat-card"

);

hoverElements.forEach(element => {

    element.addEventListener("mouseenter", () => {

        cursor.classList.add("cursor-grow");

    });

    element.addEventListener("mouseleave", () => {

        cursor.classList.remove("cursor-grow");

    });

});


/* ========================================================= */
/* ================= FLOATING PARTICLES ==================== */
/* ========================================================= */

const createParticle = () => {

    const particle = document.createElement("span");

    particle.classList.add("particle");

    document.body.appendChild(particle);

    const size = Math.random() * 6 + 2;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.left = Math.random() * innerWidth + "px";

    particle.style.animationDuration = Math.random() * 5 + 4 + "s";

    setTimeout(() => {

        particle.remove();

    }, 9000);

};

setInterval(createParticle, 350);


/* ========================================================= */
/* ================= SCROLL REVEAL EFFECT ================== */
/* ========================================================= */

const revealElements = document.querySelectorAll(

    ".hero-content, .hero-image-wrapper, .section-title, .skill-card, .project-card, .timeline-item"

);

const revealOnScroll = () => {

    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {

            element.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* ========================================================= */
/* ================= CONTACT FORM EFFECT =================== */
/* ========================================================= */

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const button = form.querySelector("button");

    button.innerHTML = "Message Sent ✓";

    button.style.background = "linear-gradient(to right,#22c55e,#16a34a)";

    setTimeout(() => {

        button.innerHTML = "Send Message";

        button.style.background =
            "linear-gradient(to right,#38BDF8,#8B5CF6)";

        form.reset();

    }, 3000);

});


/* ========================================================= */
/* ================= SMOOTH PARALLAX ======================= */
/* ========================================================= */

window.addEventListener("scroll", () => {

    const scrolled = window.scrollY;

    const glow = document.querySelector(".glow-circle");

    glow.style.transform =
        `translate(-50%, -50%) translateY(${scrolled * 0.08}px)`;

});


/* ========================================================= */
/* ================= PRELOADER ============================= */
/* ========================================================= */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        loader.classList.add("loader-hidden");

        setTimeout(() => {

            loader.remove();

        }, 800);

    }

});


/* ========================================================= */
/* ================= DYNAMIC YEAR ========================== */
/* ========================================================= */

const footerYear = document.querySelector(".footer-year");

if (footerYear) {

    footerYear.textContent = new Date().getFullYear();

}


/* ========================================================= */
/* ================= MOBILE NAVBAR CLOSE =================== */
/* ========================================================= */

const navItems = document.querySelectorAll(".nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        if (navbarCollapse.classList.contains("show")) {

            new bootstrap.Collapse(navbarCollapse).hide();

        }

    });

});


/* ========================================================= */
/* ================= SCROLL TO TOP BUTTON ================== */
/* ========================================================= */

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = `<i class="ri-arrow-up-line"></i>`;

scrollBtn.classList.add("scroll-top-btn");

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollBtn.classList.add("show-scroll");

    } else {

        scrollBtn.classList.remove("show-scroll");

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


/* ========================================================= */
/* ================= LOADING TEXT EFFECT =================== */
/* ========================================================= */

const heroTitle = document.querySelector(".hero-title");

window.addEventListener("load", () => {

    heroTitle.classList.add("animate-title");

});


/* ========================================================= */
/* ================= GLOW EFFECT ON MOUSE ================== */
/* ========================================================= */

document.addEventListener("mousemove", (e) => {

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    document.body.style.backgroundPosition = `${x * 50}px ${y * 50}px`;

});