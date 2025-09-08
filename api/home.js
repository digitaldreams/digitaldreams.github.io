// API service for home page data
export default class HomeApi {
    // Fetch data from JSON file
    static async fetchAllData() {
        try {
            // Show loading state
            globalThis.isLoading = true;
            
            // Fetch data from JSON file
            const response = await fetch('api/home.json');
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            
            // Assign data to globalThis
            globalThis.skills = data.skills;
            globalThis.posts = data.posts;
            globalThis.projects = data.projects;
            globalThis.reviews = data.reviews;
            globalThis.education = data.education;
            globalThis.stats = data.stats;
            
            // Set loading state to false
            globalThis.isLoading = false;
            
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            globalThis.isLoading = false;
            throw error;
        }
    }
}