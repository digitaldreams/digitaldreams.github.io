export default class Skill {
    constructor({ id, icon, name, tooltipTitle, tooltipDescription }) {
        this.id = id;
        this.icon = icon || 'fas fa-code';
        this.name = name || 'Skill';
        this.tooltipTitle = tooltipTitle || this.name;
        this.tooltipDescription = tooltipDescription || 'Skill description';
    }

    static getAll() {
        // In a real app, this would fetch from an API
        // For now, we're using the data from globalThis
        return globalThis.skills ? globalThis.skills.map(skill => new Skill(skill)) : [];
    }
}