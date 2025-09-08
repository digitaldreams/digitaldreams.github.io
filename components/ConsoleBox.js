export default class ConsoleBox extends HTMLElement {
    constructor() {
        super();
        // Set default attributes
        this.header = this.getAttribute('header') || 'tuhin@portfolio:~';
    }

    connectedCallback() {
        this.render();
    }

    render() {
        // Create a shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        // Add template
        const template = document.createElement('template');
        template.innerHTML = `<div class="container mx-auto">
        <div class="bg-dark-card border border-dark-border rounded-xl overflow-hidden terminal-window">
            <div class="flex items-center px-4 py-3 bg-dark-border">
                <div class="flex space-x-2">
                    <div class="w-3 h-3 rounded-full bg-red-500"></div>
                    <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div class="ml-3 text-text-tertiary text-sm">${this.header}</div>
            </div>
            <div class="p-8 md:p-12">
                <slot></slot>
            </div>
        </div>
        </div>
        `;

        // Append link, style and template to shadow root
        shadow.appendChild(template.content.cloneNode(true));
    }
}
