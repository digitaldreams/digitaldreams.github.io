export default class UpworkSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Check if data is already loaded
        if (globalThis.stats && globalThis.reviews) {
            this.render();
        } else {
            // Wait for data to be loaded
            window.addEventListener('dataLoaded', () => {
                this.render();
            });
        }
    }

    renderStats() {
        if (!globalThis.stats) return '';
        
        return globalThis.stats.map(stat => `
            <upwork-stats-card value="${stat.value}" label="${stat.label}">
            </upwork-stats-card>
        `).join('');
    }

    renderReviews() {
        if (!globalThis.reviews) return '';
        
        return globalThis.reviews.map(review => `
            <upwork-review-card 
                initials="${review.initials}" 
                name="${review.name}" 
                title="${review.title}" 
                date="${review.date}" 
                rating="${review.rating}">
                <p class="text-text-secondary italic">
                    ${review.content}
                </p>
            </upwork-review-card>
        `).join('');
    }

    get template() {
        return `
        <!-- Upwork Section -->
        <section id="upwork" class="py-20 bg-dark-bg">
            <div class="container mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold section-title">Upwork Professional</h2>
                    <p class="text-text-secondary max-w-2xl mx-auto mt-4 text-lg">
                        Full-time freelancer with exceptional client reviews and proven track record
                    </p>
                </div>

                <div class="max-w-5xl mx-auto">
                    <div class="grid md:grid-cols-4 gap-6 mb-12">
                        ${this.renderStats()}
                    </div>

                    <div class="mb-12">
                        <h3 class="text-2xl font-bold mb-8 text-center text-accent-green">Top Client Reviews</h3>

                        <div class="space-y-8">
                            ${this.renderReviews()}
                        </div>
                    </div>

                    <div class="text-center">
                        <a href="#" class="inline-flex items-center px-8 py-4 bg-accent-orange text-white font-bold rounded-lg btn-primary">
                            <i class="fab fa-upwork mr-2"></i> Hire Me on Upwork Now
                        </a>
                        <div class="mt-4 text-text-secondary">Full-time Upwork Professional</div>
                    </div>
                </div>
            </div>
        </section>
        `;
    }

    render() {
        this.innerHTML = this.template;
    }
}