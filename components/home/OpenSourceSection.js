export default class OpenSourceSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Check if data is already loaded
        if (globalThis.projects) {
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
            <span class="px-2 py-1 bg-accent-blue bg-opacity-20 text-accent-blue text-xs rounded-full">
                ${tag.text}
            </span>
        `).join('');
    }

    renderProjects() {
        if (!globalThis.projects) return '';
        
        return globalThis.projects.map(project => `
            <open-source-card 
                name="${project.name}" 
                stars="${project.stars}" 
                forks="${project.forks}" 
                issues="${project.issues}">
                <p class="text-text-secondary mb-4">
                    ${project.description}
                </p>
                <div class="flex flex-wrap gap-2">
                    ${this.renderTags(project.tags)}
                </div>
            </open-source-card>
        `).join('');
    }

    get template() {
        return `
        <!-- Open Source Section -->
        <section id="opensource" class="py-20 bg-dark-card">
            <div class="container mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold section-title">Open Source Projects</h2>
                    <p class="text-text-secondary max-w-2xl mx-auto mt-4 text-lg">
                        Contributing to the developer community through open source
                    </p>
                </div>

                <div class="grid md:grid-cols-3 gap-8">
                    ${this.renderProjects()}
                </div>
            </div>
        </section>
        `;
    }

    render() {
        this.innerHTML = this.template;
    }
}