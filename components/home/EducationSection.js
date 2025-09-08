export default class EducationSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Check if data is already loaded
        if (globalThis.education) {
            this.render();
        } else {
            // Wait for data to be loaded
            window.addEventListener('dataLoaded', () => {
                this.render();
            });
        }
    }

    renderEducation() {
        if (!globalThis.education) return '';
        
        return globalThis.education.map(edu => `
            <div class="bg-dark-card border border-dark-border rounded-xl p-6">
                <h3 class="text-xl font-bold mb-2">${edu.institution}</h3>
                <div class="text-accent-blue font-medium mb-2">${edu.degree} in ${edu.field}</div>
                <div class="text-text-secondary text-sm mb-3">${edu.startDate} - ${edu.endDate}</div>
                <p class="text-text-secondary mb-3">${edu.description}</p>
                <div class="text-text-tertiary text-sm">${edu.grade}</div>
            </div>
        `).join('');
    }

    get template() {
        return `
        <!-- Education Section -->
        <section id="education" class="py-20 bg-dark-bg">
            <div class="container mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold section-title">Education</h2>
                    <p class="text-text-secondary max-w-2xl mx-auto mt-4 text-lg">
                        My academic background and qualifications
                    </p>
                </div>

                <div class="max-w-3xl mx-auto space-y-6">
                    ${this.renderEducation()}
                </div>
            </div>
        </section>
        `;
    }

    render() {
        this.innerHTML = this.template;
    }
}