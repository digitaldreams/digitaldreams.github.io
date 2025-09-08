export default class LifestyleSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    get template() {
        return `
        <!-- Lifestyle Section -->
        <section class="py-20 bg-dark-bg">
            <div class="container mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold section-title">Developer Lifestyle</h2>
                    <p class="text-text-secondary max-w-2xl mx-auto mt-4 text-lg">
                        How I maintain balance and sustain long-term growth in tech
                    </p>
                </div>

                <div class="max-w-4xl mx-auto">
                    <console-box header="tuhin@lifestyle:~">
                        <div class="mb-6">
                            <span class="text-accent-blue font-mono">$ </span>
                            <span class="text-accent-cyan font-mono">echo $developer_lifestyle</span>
                        </div>
                        
                        <div class="text-2xl text-text-secondary mb-8 h-16">
                            <typing-effect speed="50" erase-speed="30" pause-time="2000" start-delay="1000">
                                <span>a morning ritual fuels my creativity</span>
                                <span>balanced living supports sustainable work</span>
                                <span>hobbies nurture the whole developer</span>
                                <span>discipline creates freedom</span>
                                <span>10+ years of sustainable practice</span>
                                <span>consistency builds mastery</span>
                            </typing-effect>
                        </div>

                        <div class="grid md:grid-cols-2 gap-8 mt-12">
                            <div class="bg-dark-bg border border-dark-border rounded-xl p-6">
                                <h3 class="text-xl font-bold mb-4 text-accent-blue">Morning Routine</h3>
                                <ul class="space-y-3 text-text-secondary">
                                    <li class="flex items-start">
                                        <i class="fas fa-check-circle text-accent-green mt-1 mr-3"></i>
                                        <span>5:30 AM wake up, 30 min meditation</span>
                                    </li>
                                    <li class="flex items-start">
                                        <i class="fas fa-check-circle text-accent-green mt-1 mr-3"></i>
                                        <span>1 hour of personal coding projects</span>
                                    </li>
                                    <li class="flex items-start">
                                        <i class="fas fa-check-circle text-accent-green mt-1 mr-3"></i>
                                        <span>Review industry news and trends</span>
                                    </li>
                                </ul>
                            </div>

                            <div class="bg-dark-bg border border-dark-border rounded-xl p-6">
                                <h3 class="text-xl font-bold mb-4 text-accent-blue">Work-Life Balance</h3>
                                <ul class="space-y-3 text-text-secondary">
                                    <li class="flex items-start">
                                        <i class="fas fa-check-circle text-accent-green mt-1 mr-3"></i>
                                        <span>Strict 8-hour workday, no overtime</span>
                                    </li>
                                    <li class="flex items-start">
                                        <i class="fas fa-check-circle text-accent-green mt-1 mr-3"></i>
                                        <span>Weekly tech meetups and networking</span>
                                    </li>
                                    <li class="flex items-start">
                                        <i class="fas fa-check-circle text-accent-green mt-1 mr-3"></i>
                                        <span>Regular contributions to open source</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </console-box>
                </div>
            </div>
        </section>
        `;
    }

    render() {
        this.innerHTML = this.template;
    }
}