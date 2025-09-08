export default class BlogCard extends HTMLElement {
    constructor() {
        super();
        // Set default attributes
        this.date = this.getAttribute('date') || 'Jan 1, 2023';
        this.title = this.getAttribute('title') || 'Blog Post';
    }

    connectedCallback() {
        this.render();
    }

    render() {
        // Store the inner content before we replace it
        const innerContent = this.innerHTML;
        
        this.innerHTML = `
        <div class="bg-dark-card border border-dark-border rounded-xl overflow-hidden card-hover h-full flex flex-col">
            <div class="h-48 bg-gradient-to-r from-accent-blue to-accent-cyan"></div>
            <div class="p-6 flex-grow">
                <div class="text-accent-green text-sm font-medium mb-2">${this.date}</div>
                <h3 class="text-xl font-bold mb-3">${this.title}</h3>
                ${innerContent}
            </div>
        </div>
        `;
    }
}