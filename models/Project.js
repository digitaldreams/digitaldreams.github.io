export default class Project {
    constructor({ id, name, description, stars, forks, issues, tags }) {
        this.id = id;
        this.name = name || 'Project';
        this.description = description || '';
        this.stars = stars || '0';
        this.forks = forks || '0';
        this.issues = issues || '0';
        this.tags = tags || [];
    }

    static getAll() {
        // In a real app, this would fetch from an API
        // For now, we're using the data from globalThis
        return globalThis.projects ? globalThis.projects.map(project => new Project(project)) : [];
    }
}