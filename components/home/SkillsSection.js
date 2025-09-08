export default class SkillsSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Check if data is already loaded
        if (globalThis.skills) {
            this.render();
            this.initializeTooltips();
        } else {
            // Wait for data to be loaded
            window.addEventListener('dataLoaded', () => {
                this.render();
                this.initializeTooltips();
            });
        }
    }

    initializeTooltips() {
        // Initialize tooltips after rendering
        setTimeout(() => {
            // Add tooltip functionality for skills
            const skillItems = this.querySelectorAll('.skill-item');
            skillItems.forEach(item => {
                const tooltip = item.querySelector('.skill-tooltip');

                item.addEventListener('mouseenter', () => {
                    if (tooltip) tooltip.classList.remove('hidden');
                });

                item.addEventListener('mouseleave', () => {
                    if (tooltip) tooltip.classList.add('hidden');
                });
            });
        }, 0);
    }

    renderSkills() {
        if (!globalThis.skills) return '';
        
        return globalThis.skills.map(skill => `
            <skill-card 
                icon="${skill.icon}" 
                name="${skill.name}" 
                tooltip-title="${skill.tooltipTitle}" 
                tooltip-description="${skill.tooltipDescription}">
            </skill-card>
        `).join('');
    }

    get template() {
        return `
        <!-- Skills Section -->
        <section id="skills" class="py-20 bg-dark-bg">
            <div class="container mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold section-title">Technical Skills</h2>
                    <p class="text-text-secondary max-w-2xl mx-auto mt-4 text-lg">
                        Hover over icons to see details about my expertise
                    </p>
                </div>

                <!-- Skills Grid - 2 Rows x 6 Columns -->
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                    ${this.renderSkills()}
                </div>
            </div>
        </section>
        `;
    }

    render() {
        this.innerHTML = this.template;
    }
}