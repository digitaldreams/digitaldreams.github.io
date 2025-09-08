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

        // Add component-specific styles
        const style = document.createElement('style');
        style.textContent = `
            :host {
                display: block;
            }
            section {
                display: flex;
                align-items: center;
                padding-top: 4rem;
                padding-bottom: 5rem;
                position: relative;
                overflow: hidden;
            }
            .typing-cursor {
                display: inline-block;
                width: 3px;
                height: 1.2em;
                background-color: #3b82f6;
                margin-left: 2px;
                animation: blink 1s infinite;
            }
            @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
            }
        `;

        // Add template
        const template = document.createElement('template');
        template.innerHTML = `
        <!-- Hero Section -->
        <section >
            <!-- Animated Background -->
            <code-background></code-background>

            <div class="container mx-auto px-4 relative z-10">
                <div class="mx-auto">
                    <console-box header="tuhin@portfolio:~">
                        <div class="mb-4">
                            <span class="text-accent-blue font-mono">$ </span>
                            <span class="text-accent-cyan font-mono">whoami</span>
                        </div>

                        <div class="mt-8">
                            <h1 class="text-9xl md:text-7xl font-bold mb-6 gradient-text">
                                Tuhin Bepari<span class="typing-cursor"></span>
                            </h1>
                                <slot name="description"></slot>
                        </div>
                    </console-box>
                </div>
            </div>
        </section>
        `;

        // Append all links, style and template to shadow root
        shadow.appendChild(style);
        shadow.appendChild(template.content.cloneNode(true));
    }
}
