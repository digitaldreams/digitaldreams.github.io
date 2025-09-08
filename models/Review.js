export default class Review {
    constructor({ id, initials, name, title, date, rating, content }) {
        this.id = id;
        this.initials = initials || 'JD';
        this.name = name || 'John Doe';
        this.title = title || 'Client';
        this.date = date || 'Jan 1, 2023';
        this.rating = rating || '5';
        this.content = content || '';
    }

    static getAll() {
        // In a real app, this would fetch from an API
        // For now, we're using the data from globalThis
        return globalThis.reviews ? globalThis.reviews.map(review => new Review(review)) : [];
    }
}