/**
 * Tailwind CSS v4 - Optional JavaScript config file
 * Note: In v4, configuration is primarily done through CSS using @theme directive
 * This file is only needed for advanced configuration or compatibility reasons
 * Load it explicitly in your CSS with: @config "./tailwind.config.js"
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Content scanning is now automatic in v4 - no need to specify paths
  // The CLI automatically scans your project for class usage

  // Theme customization should be done in CSS using @theme directive
  // For backward compatibility only:
  theme: {
    extend: {
        colors: {
                        'dark-bg': '#0f172a',
                        'dark-card': '#1e293b',
                        'dark-border': '#334155',
                        'accent-blue': '#3b82f6',
                        'accent-cyan': '#06b6d4',
                        'accent-green': '#10b981',
                        'accent-orange': '#f97316',
                        'accent-purple': '#8b5cf6',
                        'text-primary': '#f1f5f9',
                        'text-secondary': '#cbd5e1',
                        'text-tertiary': '#94a3b8',
                    },
                    fontFamily: {
                        'sans': ['Inter', 'sans-serif'],
                        'mono': ['JetBrains Mono', 'monospace'],
                    }
    },
  },

  // Plugins work the same way
  plugins: [],
}
