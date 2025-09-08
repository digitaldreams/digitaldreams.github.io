export default class SkillCard extends HTMLElement {
    constructor() {
        super();
        // Set default attributes
        this.icon = this.getAttribute('icon') || 'fas fa-code';
        this.name = this.getAttribute('name') || 'Skill';
        this.tooltipTitle = this.getAttribute('tooltip-title') || this.name;
        this.tooltipDescription = this.getAttribute('tooltip-description') || 'Skill description';
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="relative skill-item aspect-[4/3]">
            <div class="bg-dark-card border border-dark-border rounded-xl p-4 flex flex-col items-center justify-center h-full cursor-pointer card-hover">
                <i class="${this.icon} text-5xl text-accent-blue mb-2"></i>
                <div class="text-text-tertiary text-sm mt-2">${this.name}</div>
            </div>
            <div class="skill-tooltip absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 hidden w-48 bg-dark-card border border-dark-border rounded-lg p-3 z-20">
                <div class="text-white font-bold mb-1">${this.tooltipTitle}</div>
                <div class="text-text-secondary text-sm">${this.tooltipDescription}</div>
                <div class="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-dark-card"></div>
            </div>
        </div>
        `;
    }
}