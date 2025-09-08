export default class UpworkReviewCard extends HTMLElement {
    constructor() {
        super();
        // Set default attributes
        this.initials = this.getAttribute('initials') || 'JD';
        this.name = this.getAttribute('name') || 'John Doe';
        this.title = this.getAttribute('title') || 'Client';
        this.date = this.getAttribute('date') || 'Jan 1, 2023';
        this.rating = this.getAttribute('rating') || '5';
    }

    connectedCallback() {
        this.render();
    }

    renderStars(rating) {
        const stars = [];
        const fullStars = parseInt(rating);
        for (let i = 0; i < fullStars; i++) {
            stars.push('<i class="fas fa-star"></i>');
        }
        return stars.join('');
    }

    render() {
        // Store the inner content before we replace it
        const innerContent = this.innerHTML;
        
        this.innerHTML = `
        <div class="bg-dark-card border border-dark-border rounded-xl p-6">
            <div class="flex items-start mb-4">
                <div class="w-12 h-12 rounded-full bg-accent-orange flex items-center justify-center text-white font-bold mr-4">${this.initials}</div>
                <div>
                    <h4 class="text-xl font-bold">${this.name}</h4>
                    <p class="text-text-secondary">${this.title}</p>
                </div>
            </div>
            <div class="flex text-yellow-400 mb-3 text-sm">
                ${this.renderStars(this.rating)}
            </div>
            ${innerContent}
            <div class="text-text-tertiary text-right text-sm mt-4">${this.date}</div>
        </div>
        `;
    }
}