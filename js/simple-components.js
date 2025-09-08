// Simple component registry that embeds components directly
const components = {
    nav: `<header class="fixed top-0 w-full z-50 bg-dark-bg bg-opacity-95 backdrop-blur-sm border-b border-dark-border dark-mode">
    <div class="container mx-auto px-4">
        <nav class="flex justify-between items-center py-4">
            <a href="index.html" class="text-2xl font-bold text-accent-blue">Tuhin Bepari</a>
            <div class="flex items-center space-x-6">
                <ul class="flex space-x-8">
                    <li><a href="index.html" class="nav-link text-text-secondary hover:text-accent-blue transition-colors font-medium">Home</a></li>
                    <li><a href="about.html" class="nav-link text-text-secondary hover:text-accent-blue transition-colors font-medium">About</a></li>
                    <li><a href="lifestyle.html" class="nav-link text-text-secondary hover:text-accent-blue transition-colors font-medium">Lifestyle</a></li>
                    <li><a href="education.html" class="nav-link text-text-secondary hover:text-accent-blue transition-colors font-medium">Education</a></li>
                    <li><a href="projects.html" class="nav-link text-text-secondary hover:text-accent-blue transition-colors font-medium">Projects</a></li>
                    <li><a href="upwork.html" class="nav-link text-text-secondary hover:text-accent-blue transition-colors font-medium">Upwork</a></li>
                    <li><a href="#contact" class="nav-link text-text-secondary hover:text-accent-blue transition-colors font-medium">Contact</a></li>
                </ul>
                <!-- Dark/Light Mode Toggle -->
                <button id="theme-toggle" class="p-2 rounded-lg bg-dark-card border border-dark-border text-text-secondary hover:text-accent-blue transition-colors">
                    <i class="fas fa-moon"></i>
                </button>
            </div>
        </nav>
    </div>
</header>`,
    footer: `<footer class="bg-dark-bg border-t border-dark-border py-12">
    <div class="container mx-auto px-4">
        <div class="text-center mb-8">
            <div class="text-3xl font-bold text-accent-blue mb-4">Tuhin Bepari</div>
            <p class="text-text-secondary mb-6">Full Stack Engineer | AI Code Generation Specialist | Team Leader</p>

            <div class="flex justify-center space-x-6 mb-8">
                <a href="https://github.com/tuhinbepari" class="w-12 h-12 rounded-full border border-dark-border flex items-center justify-center text-text-secondary hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-all" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github"></i>
                </a>
                <a href="https://medium.com/@tuhinbepari" class="w-12 h-12 rounded-full border border-dark-border flex items-center justify-center text-text-secondary hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-all" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-medium-m"></i>
                </a>
                <a href="https://www.upwork.com/freelancers/~01a53175d67e23083a" class="w-12 h-12 rounded-full border border-dark-border flex items-center justify-center text-text-secondary hover:bg-accent-orange hover:text-white hover:border-accent-orange transition-all" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-upwork"></i>
                </a>
                <a href="https://linkedin.com/in/tuhinbepari" class="w-12 h-12 rounded-full border border-dark-border flex items-center justify-center text-text-secondary hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-all" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="https://twitter.com/tuhinbepari" class="w-12 h-12 rounded-full border border-dark-border flex items-center justify-center text-text-secondary hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-all" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-twitter"></i>
                </a>
            </div>
        </div>

        <div class="text-center">
            <a href="#contact" class="inline-flex items-center px-6 py-3 border-2 border-accent-green text-accent-green font-bold rounded-lg hover:bg-accent-green hover:text-white transition-all btn-primary">
                Get In Touch <i class="fas fa-arrow-right ml-2"></i>
            </a>
        </div>

        <div class="text-center text-text-tertiary text-sm pt-8 border-t border-dark-border mt-8">
            <p>© 2023 Tuhin Bepari. All rights reserved. Crafted with precision.</p>
        </div>
    </div>
</footer>`
};

class ComponentRegistry {
    static registerComponents() {
        // Load and insert nav component
        const navPlaceholder = document.querySelector('[data-component="nav"]');
        if (navPlaceholder) {
            navPlaceholder.innerHTML = components.nav;
        }

        // Load and insert footer component
        const footerPlaceholder = document.querySelector('[data-component="footer"]');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = components.footer;
        }

        // Initialize component functionality after loading
        this.initializeComponents();
    }

    static initializeComponents() {
        // Re-attach event listeners for nav and footer elements
        this.initThemeToggle();
        this.initSmoothScrolling();
        this.initNavActiveState();
    }

    static initThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            const body = document.body;
            const themeIcon = themeToggle.querySelector('i');

            // Check for saved theme preference or default to dark mode
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'light') {
                body.classList.add('light-mode');
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }

            themeToggle.addEventListener('click', () => {
                body.classList.toggle('light-mode');

                if (body.classList.contains('light-mode')) {
                    themeIcon.classList.remove('fa-moon');
                    themeIcon.classList.add('fa-sun');
                    localStorage.setItem('theme', 'light');
                } else {
                    themeIcon.classList.remove('fa-sun');
                    themeIcon.classList.add('fa-moon');
                    localStorage.setItem('theme', 'dark');
                }
            });
        }
    }

    static initSmoothScrolling() {
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    static initNavActiveState() {
        // Highlight active nav link based on current page
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
                link.classList.remove('text-text-secondary');
                link.classList.add('text-accent-blue', 'font-medium');
            }
        });
    }
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header && window.scrollY > 100) {
        header.classList.add('shadow-lg');
    } else if (header) {
        header.classList.remove('shadow-lg');
    }
});

// Typing effect for expertise
function typeExpertise() {
    const expertiseTexts = [
        "Laravel Expert with 8 years of experience",
        "Symfony expert with 3 years of experience"
    ];
    const element = document.getElementById('expertiseTyping');
    if (!element) return;
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 50;

    function type() {
        const currentText = expertiseTexts[textIndex];

        if (!isDeleting && charIndex < currentText.length) {
            // Typing
            element.innerHTML = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 50;
        } else if (!isDeleting && charIndex === currentText.length) {
            // Pause at end of text
            isDeleting = true;
            typingSpeed = 2000;
        } else if (isDeleting && charIndex > 0) {
            // Deleting
            element.innerHTML = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 30;
        } else if (isDeleting && charIndex === 0) {
            // Move to next text
            isDeleting = false;
            textIndex = (textIndex + 1) % expertiseTexts.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    // Start typing after a delay
    setTimeout(type, 1000);
}

// Typing effect for lifestyle page
function typeLifestyle() {
    const lifestyleTexts = [
        "a morning ritual fuels my creativity",
        "balanced living supports sustainable work",
        "hobbies nurture the whole developer",
        "discipline creates freedom",
        "10+ years of sustainable practice",
        "consistency builds mastery"
    ];
    const element = document.getElementById('lifestyleTyping');
    if (!element) return;
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 50;

    function type() {
        const currentText = lifestyleTexts[textIndex];

        if (!isDeleting && charIndex < currentText.length) {
            // Typing
            element.innerHTML = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 50;
        } else if (!isDeleting && charIndex === currentText.length) {
            // Pause at end of text
            isDeleting = true;
            typingSpeed = 2000;
        } else if (isDeleting && charIndex > 0) {
            // Deleting
            element.innerHTML = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 30;
        } else if (isDeleting && charIndex === 0) {
            // Move to next text
            isDeleting = false;
            textIndex = (textIndex + 1) % lifestyleTexts.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    // Start typing after a delay
    setTimeout(type, 1000);
}

// Create animated background elements with coding syntax
function createBackgroundElements() {
    const background = document.getElementById('codeBackground');
    if (!background) return;

    // Code snippets without specific framework names
    const codeSnippets = [
        'function init() {',
        'const data = fetchData();',
        'if (condition) {',
        'return response.json();',
        'for (let i = 0; i < arr.length; i++) {',
        'class Component extends Base {',
        'async function process() {',
        'try { await operation(); }',
        'const result = map(data);',
        'export default module;',
        'import { util } from "lib";',
        'let config = new Config();',
        'this.setState({ ready: true });',
        'element.addEventListener("click", handler);',
        'response.headers.set("Content-Type", "application/json");',
        'const promise = new Promise((resolve) => {',
        'array.filter(item => item.active);',
        'document.querySelector(".target");',
        'Math.random() * range;',
        'JSON.parse(payload);'
    ];

    // Syntax elements
    const syntaxElements = [
        '{', '}', '(', ')', '[', ']', ';', ':', '=', '=>', '->', '::',
        '&&', '||', '==', '!=', '<', '>', '<=', '>=', '+', '-', '*', '/',
        '...', '?', '!', '@', '#', '$', '%', '^', '&', '*', '|'
    ];

    // Bracket elements
    const bracketElements = ['{', '}', '(', ')', '[', ']'];

    // Create floating code snippets
    for (let i = 0; i < 40; i++) {
        const element = document.createElement('div');
        element.className = 'code-snippet';
        element.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        element.style.left = Math.random() * 100 + 'vw';
        element.style.animationDelay = Math.random() * 15 + 's';
        element.style.animationDuration = (10 + Math.random() * 20) + 's';
        background.appendChild(element);
    }

    // Create syntax elements
    for (let i = 0; i < 30; i++) {
        const element = document.createElement('div');
        element.className = 'syntax-element';
        element.textContent = syntaxElements[Math.floor(Math.random() * syntaxElements.length)];
        element.style.left = Math.random() * 100 + 'vw';
        element.style.top = Math.random() * 100 + 'vh';
        element.style.animationDelay = Math.random() * 10 + 's';
        element.style.animationDuration = (5 + Math.random() * 10) + 's';
        background.appendChild(element);
    }

    // Create bracket elements
    for (let i = 0; i < 25; i++) {
        const element = document.createElement('div');
        element.className = 'bracket-element';
        element.textContent = bracketElements[Math.floor(Math.random() * bracketElements.length)];
        element.style.left = Math.random() * 100 + 'vw';
        element.style.top = Math.random() * 100 + 'vh';
        element.style.animationDelay = Math.random() * 12 + 's';
        element.style.animationDuration = (8 + Math.random() * 15) + 's';
        background.appendChild(element);
    }

    // Create curly braces
    for (let i = 0; i < 20; i++) {
        const element = document.createElement('div');
        element.className = 'curly-brace';
        element.textContent = Math.random() > 0.5 ? '{' : '}';
        element.style.left = Math.random() * 100 + 'vw';
        element.style.top = Math.random() * 100 + 'vh';
        element.style.animationDelay = Math.random() * 20 + 's';
        element.style.animationDuration = (15 + Math.random() * 20) + 's';
        background.appendChild(element);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Register and load components
    ComponentRegistry.registerComponents();

    // Initialize page-specific features after components are loaded
    typeExpertise();
    typeLifestyle();
    createBackgroundElements();

    // Add tooltip functionality for skills
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        const tooltip = item.querySelector('.skill-tooltip');

        item.addEventListener('mouseenter', () => {
            if (tooltip) tooltip.classList.remove('hidden');
        });

        item.addEventListener('mouseleave', () => {
            if (tooltip) tooltip.classList.add('hidden');
        });
    });
});