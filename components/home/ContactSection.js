export default class ContactSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    get template() {
        return `
        <!-- Contact Section -->
        <section id="contact" class="py-20 bg-dark-card">
            <div class="container mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold section-title">Have a Project Idea?</h2>
                    <p class="text-text-secondary max-w-2xl mx-auto mt-4 text-lg">
                        Let's discuss how we can bring your ideas to life. I'm available for freelance work and open to new opportunities.
                    </p>
                </div>

                <div class="max-w-4xl mx-auto">
                    <div class="bg-dark-bg border border-dark-border rounded-xl overflow-hidden">
                        <div class="flex items-center px-4 py-3 bg-dark-border">
                            <div class="flex space-x-2">
                                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div class="ml-3 text-text-tertiary text-sm">contact@tuhinbepari:~</div>
                        </div>
                        <div class="p-8">
                            <form class="space-y-6">
                                <div class="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label class="block text-text-secondary mb-2 font-medium">Name</label>
                                        <input type="text" class="w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-text-primary focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-opacity-20">
                                    </div>
                                    <div>
                                        <label class="block text-text-secondary mb-2 font-medium">Email</label>
                                        <input type="email" class="w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-text-primary focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-opacity-20">
                                    </div>
                                </div>

                                <div>
                                    <label class="block text-text-secondary mb-2 font-medium">Subject</label>
                                    <input type="text" class="w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-text-primary focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-opacity-20">
                                </div>

                                <div>
                                    <label class="block text-text-secondary mb-2 font-medium">Message</label>
                                    <textarea rows="5" class="w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-text-primary focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-opacity-20"></textarea>
                                </div>

                                <div class="text-center">
                                    <button type="submit" class="px-8 py-4 bg-accent-blue text-white font-bold rounded-lg btn-primary">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="grid md:grid-cols-3 gap-8 mt-12">
                        <div class="bg-dark-bg border border-dark-border rounded-xl p-6 text-center">
                            <div class="text-3xl text-accent-blue mb-4">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-2">Email</h3>
                            <p class="text-text-secondary">tuhin.bepari@example.com</p>
                        </div>

                        <div class="bg-dark-bg border border-dark-border rounded-xl p-6 text-center">
                            <div class="text-3xl text-accent-blue mb-4">
                                <i class="fab fa-upwork"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-2">Upwork</h3>
                            <p class="text-text-secondary">Full-time Professional</p>
                        </div>

                        <div class="bg-dark-bg border border-dark-border rounded-xl p-6 text-center">
                            <div class="text-3xl text-accent-blue mb-4">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-2">Location</h3>
                            <p class="text-text-secondary">Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
    }

    render() {
        this.innerHTML = this.template;
    }
}