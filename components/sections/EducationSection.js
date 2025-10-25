import EducationService from '../../services/education.js';

export default class EducationSection extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    async connectedCallback() {
        const educationData = await EducationService.fetchEducationData();
        this.render(educationData);
    }

    render(educationData) {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="css/output.css">
            <section class="py-12 bg-dark-bg">
                <div class="container mx-auto px-4">
                    <div class="mx-auto">
                        <div class="bg-dark-card border border-dark-border rounded-xl p-8" id="education-container">
                            ${educationData.map(item => `
                                <div class="timeline-item py-1">
                                    <div class="flex flex-wrap justify-between items-start mb-2">
                                        <h3 class="text-2xl font-bold text-accent-blue">${item.degree}</h3>
                                        <span class="text-text-tertiary bg-dark-bg px-3 py-1 rounded-full mt-1">${item.period}</span>
                                    </div>
                                    <h4 class="text-xl font-semibold text-accent-cyan mb-3">${item.institution}</h4>
                                    <p class="text-text-secondary mb-4">
                                        ${item.description}
                                    </p>
                                    <div class="flex flex-wrap gap-2">
                                        ${item.tags.map(tag => `<span class="px-3 py-1 bg-accent-blue bg-opacity-20 text-accent-blue text-xs rounded-full">${tag}</span>`).join('')}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        <div class="mt-8 text-center">
                            <a href="projects.html" class="inline-flex items-center px-6 py-3 border-2 border-accent-green text-accent-green font-bold rounded-lg hover:bg-accent-green hover:text-white transition-all">
                                View Projects <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}
