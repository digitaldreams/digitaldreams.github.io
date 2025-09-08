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

        // Add styles
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
            .container {
                width: 100%;
                margin-right: auto;
                margin-left: auto;
                padding-left: 1rem;
                padding-right: 1rem;
                position: relative;
                z-index: 10;
            }
            .mx-auto {
                margin-left: auto;
                margin-right: auto;
            }
            .mb-4 {
                margin-bottom: 1rem;
            }
            .mt-8 {
                margin-top: 2rem;
            }
            h1 {
                font-size: 8rem;
                line-height: 1;
                font-weight: 700;
                margin-bottom: 1.5rem;
            }
            .gradient-text {
                background: linear-gradient(90deg, #3b82f6, #06b6d4);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            .text-2xl {
                font-size: 1.5rem;
                line-height: 2rem;
                color: #cbd5e1;
                margin-bottom: 2rem;
                max-width: 48rem;
                height: 4rem;
            }
            .text-xl {
                font-size: 1.25rem;
                line-height: 1.75rem;
                color: #cbd5e1;
                margin-bottom: 2rem;
            }
            .flex.justify-center {
                display: flex;
                justify-content: center;
            }
            .btn {
                display: inline-flex;
                align-items: center;
                padding-left: 2rem;
                padding-right: 2rem;
                padding-top: 1rem;
                padding-bottom: 1rem;
                background-color: #f97316;
                color: #fff;
                font-weight: 700;
                border-radius: 0.5rem;
                transition: all 0.3s ease;
            }
            .btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.3);
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
            @media (max-width: 768px) {
                h1 {
                    font-size: 3.5rem;
                }
            }
        `;

        // Add template
        const template = document.createElement('template');
        template.innerHTML = `
        <!-- Hero Section -->
        <section>
            <!-- Animated Background -->
            <code-background></code-background>

            <div class="container mx-auto">
                <div class="mx-auto">
                    <console-box header="tuhin@portfolio:~">
                        <div class="mb-4">
                            <span style="color: #3b82f6; font-family: 'JetBrains Mono', monospace;">$ </span>
                            <span style="color: #06b6d4; font-family: 'JetBrains Mono', monospace;">whoami</span>
                        </div>

                        <div class="mt-8">
                            <h1 class="gradient-text">
                                Tuhin Bepari<span class="typing-cursor"></span>
                            </h1>

                            <div class="text-2xl">I am a
                                <typing-effect speed="50" erase-speed="30" pause-time="2000" start-delay="1000">
                                    <span>Laravel Expert with 8 years of experience</span>
                                    <span>Symfony expert with 3 years of experience</span>
                                </typing-effect>
                            </div>

                            <p class="text-xl">
                                Full Stack Engineer specializing in modern web technologies. Expert in AI code generation tools and software engineering principles.
                            </p>
                            <div class="flex justify-center">
                                <a href="#upwork" class="btn">
                                    <i class="fab fa-upwork" style="margin-right: 0.5rem;"></i>Hire Me on Upwork
                                </a>
                            </div>
                                <slot></slot>
                        </div>
                    </console-box>
                </div>
            </div>
        </section>
        `;

        // Append style and template to shadow root
        shadow.appendChild(style);
        shadow.appendChild(template.content.cloneNode(true));
    }
}
