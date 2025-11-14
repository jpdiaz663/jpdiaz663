
import API_ENDPOINTS from './endpoints';

export const projectsapi = async ({params}) => {
    const queryParams = new URLSearchParams(params).toString();
    const url = `${API_ENDPOINTS.getProjects.url}&${queryParams}`;

    try {

        console.log('Fetching projects...' + '🚀🚀🚀');
        const response = await fetch(url, {
            headers: {
                Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
                Accept: 'application/vnd.github.v3+json',
            },
        })

        //Configure the request to handle errors
        if (!response.ok) {
            throw new Error(`Error fetching projects: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.log(`Error fetching projects: ${error.message}`);
    }

}