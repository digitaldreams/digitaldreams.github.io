export default class LoadingScreen extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    get template() {
        return `
        <div class="fixed inset-0 bg-dark-bg flex items-center justify-center z-50" id="loadingScreen">
            <div class="text-center">
                <div class="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-accent-blue mb-4"></div>
                <p class="text-text-primary text-xl">Loading portfolio data...</p>
            </div>
        </div>
        `;
    }

    render() {
        this.innerHTML = this.template;
    }
}