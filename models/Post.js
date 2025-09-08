export default class Post {
    constructor({ id, date, title, excerpt, tags }) {
        this.id = id;
        this.date = date || 'Jan 1, 2023';
        this.title = title || 'Blog Post';
        this.excerpt = excerpt || '';
        this.tags = tags || [];
    }

    static getAll() {
        // In a real app, this would fetch from an API
        // For now, we're using the data from globalThis
        return globalThis.posts ? globalThis.posts.map(post => new Post(post)) : [];
    }
}