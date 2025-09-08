export default class ServicesSection extends HTMLElement {
    constructor() {
        super();
        // Define services data
        this.services = [
            {
                icon: "fas fa-code",
                title: "Web Development",
                description: "Custom web applications built with modern frameworks for optimal performance and scalability.",
                features: [
                    "Full-stack development with Laravel & React",
                    "RESTful API development",
                    "Database design & optimization"
                ]
            },
            {
                icon: "fas fa-project-diagram",
                title: "System Architecture",
                description: "Designing scalable and maintainable software architectures with modern design patterns.",
                features: [
                    "Software requirement engineering",
                    "System modeling & design",
                    "Architectural design patterns"
                ]
            },
            {
                icon: "fas fa-users",
                title: "Team Leadership",
                description: "Leading development teams to deliver projects on time with high code quality.",
                features: [
                    "Project planning & management",
                    "Code reviews & quality assurance",
                    "Technical mentoring"
                ]
            }
        ];
    }

    connectedCallback() {
        this.render();
    }

    renderServices() {
        return this.services.map(service => `
            <service-card icon="${service.icon}" title="${service.title}">
                <p class="text-text-secondary mb-6">
                    ${service.description}
                </p>
                <ul class="space-y-3 text-text-secondary">
                    ${service.features.map(feature => `
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-accent-green mt-1 mr-3"></i>
                            <span>${feature}</span>
                        </li>
                    `).join('')}
                </ul>
            </service-card>
        `).join('');
    }

    get template() {
        return `
        <!-- Services Section -->
        <section id="services" class="py-20 bg-dark-bg">
            <div class="container mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold section-title">Services</h2>
                    <p class="text-text-secondary max-w-2xl mx-auto mt-4 text-lg">
                        Comprehensive web development and engineering services tailored to your needs
                    </p>
                </div>

                <div class="grid md:grid-cols-3 gap-8">
                    ${this.renderServices()}
                </div>
            </div>
        </section>
        `;
    }

    render() {
        this.innerHTML = this.template;
    }
}
