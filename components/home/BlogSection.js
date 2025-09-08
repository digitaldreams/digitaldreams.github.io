export default class BlogSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Check if data is already loaded
        if (globalThis.posts) {
            this.render();
        } else {
            // Wait for data to be loaded
            window.addEventListener('dataLoaded', () => {
                this.render();
            });
        }
    }

    renderTags(tags) {
        return tags.map(tag => `
            <span class="px-3 py-1 bg-accent-blue bg-opacity-20 text-accent-blue text-xs rounded-full">
                ${tag.text}
            </span>
        `).join('');
    }

    renderPosts() {
        if (!globalThis.posts) return '';
        
        return globalThis.posts.map(post => `
            <blog-card 
                date="${post.date}" 
                title="${post.title}">
                <p class="text-text-secondary mb-4">
                    ${post.excerpt}
                </p>
                <div class="flex flex-wrap gap-2">
                    ${this.renderTags(post.tags)}
                </div>
            </blog-card>
        `).join('');
    }

    get template() {
        return `
        <!-- Blog Section -->
        <section id="blog" class="py-20 bg-dark-bg">
            <div class="container mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold section-title">Blog Posts</h2>
                    <p class="text-text-secondary max-w-2xl mx-auto mt-4 text-lg">
                        Sharing knowledge through technical articles on Medium
                    </p>
                </div>

                <div class="grid md:grid-cols-3 gap-8">
                    ${this.renderPosts()}
                </div>

                <div class="text-center mt-12">
                    <a href="#" class="inline-flex items-center px-6 py-3 border-2 border-accent-green text-accent-green font-bold rounded-lg hover:bg-accent-green hover:text-white transition-all">
                        View All Articles <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        </section>
        `;
    }

    render() {
        this.innerHTML = this.template;
    }
}