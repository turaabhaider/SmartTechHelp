// script.js

// 1️⃣ Smooth scroll for anchor links (like category buttons)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 2️⃣ Sticky header on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// 3️⃣ Card hover animation effect (optional, adds subtle scaling)
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => card.style.transform = 'scale(1.03)');
    card.addEventListener('mouseleave', () => card.style.transform = 'scale(1)');
});

// 4️⃣ Back-to-top button
const backToTopBtn = document.createElement('button');
backToTopBtn.innerText = '↑ Top';
backToTopBtn.classList.add('back-to-top');
document.body.appendChild(backToTopBtn);

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if(window.scrollY > 300){
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// 5️⃣ Optional: Simple alert for external links (safety notice)
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', () => {
        alert('You are leaving SmartTechHelp. Make sure the link is safe!');
    });
});
// Night Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');

// Load preference from localStorage
if(localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

// Toggle function
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save preference
    if(document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});
document.body.classList.toggle("night-mode");
