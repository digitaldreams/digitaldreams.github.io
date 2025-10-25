const EducationService = {
    async fetchEducationData() {
        try {
            const response = await fetch('api/education.json');
            if (!response.ok) {
                throw new Error('Failed to fetch education data');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching education data:', error);
            return [];
        }
    }
};

export default EducationService;
