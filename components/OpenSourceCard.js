export default class OpenSourceCard extends HTMLElement {
    constructor() {
        super();
        // Set default attributes
        this.name = this.getAttribute('name') || 'Project';
        this.stars = this.getAttribute('stars') || '0';
        this.forks = this.getAttribute('forks') || '0';
        this.issues = this.getAttribute('issues') || '0';
    }

    connectedCallback() {
        this.render();
    }

    render() {
        // Store the inner content before we replace it
        const innerContent = this.innerHTML;
        
        this.innerHTML = `
        <div class="bg-dark-bg border border-dark-border rounded-xl p-6 card-hover h-full flex flex-col">
            <div class="flex items-center mb-4">
                <div class="text-2xl text-accent-cyan mr-3">
                    <i class="fab fa-github"></i>
                </div>
                <h3 class="text-xl font-bold text-accent-cyan">${this.name}</h3>
            </div>
            <div class="flex-grow">
                ${innerContent}
            </div>
            <div class="flex space-x-6 mb-4 text-text-tertiary">
                <span class="flex items-center">
                    <i class="fas fa-star text-yellow-400 mr-1"></i> ${this.stars}
                </span>
                <span class="flex items-center">
                    <i class="fas fa-code-branch text-accent-blue mr-1"></i> ${this.forks}
                </span>
                <span class="flex items-center">
                    <i class="fas fa-exclamation-circle text-red-400 mr-1"></i> ${this.issues}
                </span>
            </div>
        </div>
        `;
    }
}