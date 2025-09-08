export default class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-dark-bg border-t border-dark-border py-12">
        <div class="container mx-auto px-4">
          <div class="text-center mb-8">
            <div class="text-3xl font-bold text-accent-blue mb-4">Tuhin Bepari</div>
            <p class="text-text-secondary mb-6">Full Stack Engineer | AI Code Generation Specialist | Team Leader</p>

            <div class="flex justify-center space-x-6 mb-8">
              <a href="https://github.com/tuhinbepari" class="w-12 h-12 rounded-full border border-dark-border flex items-center justify-center text-text-secondary hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-all" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://medium.com/@tuhinbepari" class="w-12 h-12 rounded-full border border-dark-border flex items-center justify-center text-text-secondary hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-all" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-medium-m"></i>
              </a>
              <a href="https://www.upwork.com/freelancers/~01a53175d67e23083a" class="w-12 h-12 rounded-full border border-dark-border flex items-center justify-center text-text-secondary hover:bg-accent-orange hover:text-white hover:border-accent-orange transition-all" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-upwork"></i>
              </a>
              <a href="https://linkedin.com/in/tuhinbepari" class="w-12 h-12 rounded-full border border-dark-border flex items-center justify-center text-text-secondary hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-all" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="https://twitter.com/tuhinbepari" class="w-12 h-12 rounded-full border border-dark-border flex items-center justify-center text-text-secondary hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-all" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          <div class="text-center">
            <a href="#contact" class="inline-flex items-center px-6 py-3 border-2 border-accent-green text-accent-green font-bold rounded-lg hover:bg-accent-green hover:text-white transition-all btn-primary">
              Get In Touch <i class="fas fa-arrow-right ml-2"></i>
            </a>
          </div>

          <div class="text-center text-text-tertiary text-sm pt-8 border-t border-dark-border mt-8">
            <p>© 2023 Tuhin Bepari. All rights reserved. Crafted with precision.</p>
          </div>
        </div>
      </footer>
    `;
  }
}