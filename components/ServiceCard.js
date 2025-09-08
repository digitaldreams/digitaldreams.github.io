export default class ServiceCard extends HTMLElement {
    constructor() {
        super();
        // Set default attributes
        this.icon = this.getAttribute('icon') || 'fas fa-code';
        this.title = this.getAttribute('title') || 'Service';
    }

    connectedCallback() {
        this.render();
    }

    render() {
        // Store the inner content before we replace it
        const innerContent = this.innerHTML;
        
        this.innerHTML = `
        <div class="bg-dark-card border border-dark-border rounded-xl p-8 card-hover h-full">
            <div class="text-4xl text-accent-blue mb-6">
                <i class="${this.icon}"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4">${this.title}</h3>
            <div class="service-content">
                ${innerContent}
            </div>
        </div>
        `;
    }
}