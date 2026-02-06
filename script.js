/* ==================== TYPING ANIMATION ==================== */
const textElement = document.querySelector(".typing-text");
const words = ["Student","Frontend Developer","CMS Delveloper"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    // Adjust speed: faster when deleting
    let typeSpeed = isDeleting ? 100 : 200;

    // Logic for switching words
    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typeSpeed = 1500; // Pause at the end of word
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500; // Pause before starting new word
    }

    setTimeout(typeEffect, typeSpeed);
}

/* ==================== MOBILE MENU TOGGLE ==================== */
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* ==================== SCROLL SECTIONS ACTIVE LINK ==================== */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* ========== REMOVE MENU ON LINK CLICK/SCROLL ========== */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Start the typing effect when the page loads
document.addEventListener("DOMContentLoaded", () => {
    if (textElement) {
        typeEffect();
    }
});
// Function to handle the scroll animation
const observerOptions = {
    threshold: 0.2 // Trigger when 20% of the section is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Apply initial hidden state and observe
document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector('.about-content');
    const aboutImg = document.querySelector('.about-img');

    [aboutSection, aboutImg].forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(50px)";
        el.style.transition = "all 0.8s ease-out";
        observer.observe(el);
    });
});
/* ==================== READ MORE ==================== */
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("readMoreBtn");
    const content = document.getElementById("readMoreContent");

    // Safety check
    if (!btn || !content) return;

    btn.addEventListener("click", (e) => {
        e.preventDefault();

        content.classList.toggle("active");

        btn.textContent = content.classList.contains("active")
            ? "Read Less"
            : "Read More";
    });
});
// Function to animate skill bars on scroll
document.addEventListener("DOMContentLoaded", () => {
    const skillsSection = document.querySelector('#Skills');
    const progressBars = document.querySelectorAll('.progress .bar span');

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                progressBars.forEach(bar => {
                    bar.style.width = bar.dataset.width;
                });
            } else {
                progressBars.forEach(bar => {
                    bar.style.width = '0';
                });
            }
        });
    }, { threshold: 0.3 }); 

    if (skillsSection) {
        skillObserver.observe(skillsSection);
    }
});
// Project Js
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleBtn');
    const hiddenCards = document.querySelectorAll('.hidden-card');

    toggleBtn.addEventListener('click', () => {
        hiddenCards.forEach(card => {
            card.classList.toggle('is-visible');
        });


        if (hiddenCards[0].classList.contains('is-visible')) {
            toggleBtn.textContent = 'Show Less';
        } else {
            toggleBtn.textContent = 'Show More';
        }
    });
});
     // Experience page
    const expBtn = document.getElementById('toggleExpBtn');
    const hiddenExp = document.querySelectorAll('.hidden-experience');

    expBtn.addEventListener('click', () => {
    const isShowing = expBtn.textContent === "Show More";

    hiddenExp.forEach(item => {
        if (isShowing) {
            item.classList.add('is-visible');
        } else {
            item.classList.remove('is-visible');
        }
    });

    expBtn.textContent = isShowing ? "Show Less" : "Show More";

    if (!isShowing) {
        document.getElementById('experience').scrollIntoView({ behavior: 'smooth' });
    }
});

//contact
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.querySelector('.submit-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            // 1. Basic Validation Check
            const emailInput = document.querySelector('input[name="email"]');
            const emailValue = emailInput.value;
            
            if (!validateEmail(emailValue)) {
                e.preventDefault();
                alert("Please enter a valid email address.");
                return;
            }

            // 2. UI Feedback: Change button state
            submitBtn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.style.opacity = '0.8';
            submitBtn.style.pointerEvents = 'none';

            // Note: The form will now proceed to process.php naturally.
            // If you want to stay on the page, you would use fetch() here.
        });
    }

    // Email Regex Helper
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // 3. Optional: Add a "Reveal" animation for the Welcome text
    const welcomeText = document.querySelector('.welcome-section h1');
    if (welcomeText) {
        welcomeText.style.opacity = '0';
        welcomeText.style.transform = 'translateX(-20px)';
        welcomeText.style.transition = 'all 0.8s ease-out';
        
        setTimeout(() => {
            welcomeText.style.opacity = '1';
            welcomeText.style.transform = 'translateX(0)';
        }, 100);
    }
});


