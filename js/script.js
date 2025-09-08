// Component registration and initialization
class ComponentRegistry {
    static async loadComponent(componentName) {
        try {
            const response = await fetch(`components/${componentName}.html`);
            if (!response.ok) {
                throw new Error(`Failed to load component: ${componentName}`);
            }
            return await response.text();
        } catch (error) {
            console.error(`Error loading component ${componentName}:`, error);
            return '';
        }
    }

    static async registerComponents() {
        // Load and insert nav component
        const navContent = await this.loadComponent('nav');
        const navPlaceholder = document.querySelector('[data-component="nav"]');
        if (navPlaceholder) {
            navPlaceholder.innerHTML = navContent;
        }

        // Load and insert footer component
        const footerContent = await this.loadComponent('footer');
        const footerPlaceholder = document.querySelector('[data-component="footer"]');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = footerContent;
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
        '...', '?', '!', '@', '#', ', '%', '^', '&', '*', '|'
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
    ComponentRegistry.registerComponents().then(() => {
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
});
});