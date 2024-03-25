// script.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    
    // Example JavaScript code
    // 1. Change header color on hover
    const header = document.querySelector('header');
    header.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#555';
    });
    header.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#333';
    });

    // 2. Display a message when clicking on the "About Me" section
    const aboutSection = document.querySelector('#about-section');
    aboutSection.addEventListener('click', function() {
        alert('Welcome to the About Me section!');
    });

    // 3. Toggle navigation menu on mobile devices
    const menuIcon = document.querySelector('#menu-icon');
    const navMenu = document.querySelector('nav ul');
    menuIcon.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
});
