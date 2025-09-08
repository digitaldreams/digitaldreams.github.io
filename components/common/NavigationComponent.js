export default class NavigationComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header class="fixed top-0 w-full z-50 bg-dark-bg bg-opacity-95 backdrop-blur-sm border-b border-dark-border dark-mode">
        <div class="container mx-auto px-4">
          <nav class="flex justify-between items-center py-4">
            <a href="index.html" class="text-2xl font-bold text-accent-blue">Tuhin Bepari</a>
            <div class="flex items-center space-x-6">
              <ul class="flex space-x-8">
                <li><a href="index.html" class="nav-link text-text-secondary hover:text-accent-blue transition-colors font-medium">Home</a></li>
                <li><a href="about.html" class="nav-link text-text-secondary hover:text-accent-blue transition-colors font-medium">About</a></li>
                <li><a href="lifestyle.html" class="nav-link text-text-secondary hover:text-accent-blue transition-colors font-medium">Lifestyle</a></li>
                <li><a href="education.html" class="nav-link text-text-secondary hover:text-accent-blue transition-colors font-medium">Education</a></li>
                <li><a href="projects.html" class="nav-link text-text-secondary hover:text-accent-blue transition-colors font-medium">Projects</a></li>
                <li><a href="upwork.html" class="nav-link text-text-secondary hover:text-accent-blue transition-colors font-medium">Upwork</a></li>
                <li><a href="#contact" class="nav-link text-text-secondary hover:text-accent-blue transition-colors font-medium">Contact</a></li>
              </ul>
              <!-- Dark/Light Mode Toggle -->
              <button id="theme-toggle" class="p-2 rounded-lg bg-dark-card border border-dark-border text-text-secondary hover:text-accent-blue transition-colors">
                <i class="fas fa-moon"></i>
              </button>
            </div>
          </nav>
        </div>
      </header>
    `;
    
    // Initialize theme toggle functionality
    this.initThemeToggle();
    this.initNavActiveState();
  }

  initThemeToggle() {
    const themeToggle = this.querySelector('#theme-toggle');
    if (themeToggle) {
      const body = document.body;
      const themeIcon = themeToggle.querySelector('i');

      // Check for saved theme preference or default to dark mode
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
      }

      themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');

        if (body.classList.contains('light-mode')) {
          themeIcon.classList.remove('fa-moon');
          themeIcon.classList.add('fa-sun');
          localStorage.setItem('theme', 'light');
        } else {
          themeIcon.classList.remove('fa-sun');
          themeIcon.classList.add('fa-moon');
          localStorage.setItem('theme', 'dark');
        }
      });
    }
  }

  initNavActiveState() {
    // Highlight active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = this.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
        link.classList.remove('text-text-secondary');
        link.classList.add('text-accent-blue', 'font-medium');
      }
    });
  }
}