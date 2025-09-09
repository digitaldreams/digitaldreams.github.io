export default class HeroSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        // Create a shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        // Link to the external stylesheet
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'css/output.css');
        shadow.appendChild(linkElem);

        // Add template
        const template = document.createElement('template');
        template.innerHTML = `
        <!-- Hero Section -->
        <section class="flex items-center pt-20 pb-20 relative overflow-hidden">
            <!-- Animated Background -->
            <code-background></code-background>

            <div class="container mx-auto px-4 relative z-10">
                <div class="mx-auto">
                    <console-box header="tuhin@portfolio:~">
                        <div slot="content">
                            <div class="mb-4">
                                <span class="text-accent-blue font-mono">$ </span>
                                <span class="text-accent-cyan font-mono">whoami</span>
                            </div>

                            <div class="mt-8">
                                <h1 class="gradient-text text-5xl md:text-8xl font-bold mb-6">
                                    Tuhin Bepari<span class="typing-cursor"></span>
                                </h1>
                                <div class="text-2xl text-text-secondary mb-8">
                                    <slot name="description"></slot>
                                </div>
                                <slot name="cta"></slot>
                            </div>
                        </div>
                    </console-box>
                </div>
            </div>
        </section>
        `;

        // Append template to shadow root
        shadow.appendChild(template.content.cloneNode(true));
    }
}
