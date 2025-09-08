export default class TypingEffect extends HTMLElement {
    constructor() {
        super();
        // Set default attributes
        this.speed = this.getAttribute('speed') ? parseInt(this.getAttribute('speed')) : 50;
        this.eraseSpeed = this.getAttribute('erase-speed') ? parseInt(this.getAttribute('erase-speed')) : 30;
        this.pauseTime = this.getAttribute('pause-time') ? parseInt(this.getAttribute('pause-time')) : 2000;
        this.startDelay = this.getAttribute('start-delay') ? parseInt(this.getAttribute('start-delay')) : 1000;
    }

    connectedCallback() {
        // Store the inner content before we attach shadow DOM
        this.originalContent = this.innerHTML;

        // Get texts from child span elements
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = this.innerHTML;
        this.texts = Array.from(tempDiv.querySelectorAll('span')).map(span => span.textContent);

        // Render with shadow DOM
        this.render();

        // Initialize typing effect after rendering
        setTimeout(() => {
            this.initTyping();
        }, this.startDelay);
    }

    render() {
        // Create a shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        // Add component-specific styles
        const style = document.createElement('style');
        style.textContent = `
            :host {
                display: inline-block;
            }
            .typing-container {
                display: inline-block;
            }
        `;

        // Add template
        const template = document.createElement('template');
        template.innerHTML = `<span class="typing-container"></span>`;

        // Append link, style and template to shadow root
        shadow.appendChild(style);
        shadow.appendChild(template.content.cloneNode(true));
    }

    /**
     * Initialize typing effect
     */
    initTyping() {
        const element = this.shadowRoot.querySelector('.typing-container');
        if (!element || !this.texts.length) return;

        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = this.speed;

        const type = () => {
            const currentText = this.texts[textIndex];

            if (!isDeleting && charIndex < currentText.length) {
                // Typing
                element.innerHTML = currentText.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = this.speed;
            } else if (!isDeleting && charIndex === currentText.length) {
                // Pause at end of text
                isDeleting = true;
                typingSpeed = this.pauseTime;
            } else if (isDeleting && charIndex > 0) {
                // Deleting
                element.innerHTML = currentText.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = this.eraseSpeed;
            } else if (isDeleting && charIndex === 0) {
                // Move to next text
                isDeleting = false;
                textIndex = (textIndex + 1) % this.texts.length;
                typingSpeed = 500;
            }

            setTimeout(type, typingSpeed);
        };

        // Start typing
        type();
    }
}
