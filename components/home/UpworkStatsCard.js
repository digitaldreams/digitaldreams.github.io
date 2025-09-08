export default class UpworkStatsCard extends HTMLElement {
    constructor() {
        super();
        // Set default attributes
        this.value = this.getAttribute('value') || '0';
        this.label = this.getAttribute('label') || 'Stat';
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="bg-dark-card border border-dark-border rounded-xl p-6 text-center">
            <div class="text-3xl font-bold text-accent-orange mb-2">${this.value}</div>
            <div class="text-text-secondary text-sm">${this.label}</div>
        </div>
        `;
    }
}