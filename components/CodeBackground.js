export default class CodeBackground extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        // Initialize animations after rendering
        setTimeout(() => {
            this.createBackgroundElements();
        }, 0);
    }

    render() {
        // Create a shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
            :host {
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
                z-index: -1;
                opacity: 0.25;
            }
        `;

        // Add template
        const template = document.createElement('template');
        template.innerHTML = `<div class="code-background"></div>`;

        // Append link, style and template to shadow root
        shadow.appendChild(style);
        shadow.appendChild(template.content.cloneNode(true));
    }

    /**
     * Create animated background elements with coding syntax
     */
    createBackgroundElements() {
        const background = this.shadowRoot.querySelector('.code-background');
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
}
