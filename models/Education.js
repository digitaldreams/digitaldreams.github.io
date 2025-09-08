export default class Education {
    constructor({ id, institution, degree, field, startDate, endDate, description, grade }) {
        this.id = id;
        this.institution = institution || '';
        this.degree = degree || '';
        this.field = field || '';
        this.startDate = startDate || '';
        this.endDate = endDate || '';
        this.description = description || '';
        this.grade = grade || '';
    }

    static getAll() {
        // In a real app, this would fetch from an API
        // For now, we're using the data from globalThis
        return globalThis.education ? globalThis.education.map(edu => new Education(edu)) : [];
    }
}