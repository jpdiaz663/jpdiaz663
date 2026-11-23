
import API_ENDPOINTS from './endpoints';

export const projectsapi = async (params, options = {}) => {
    const { signal } = options;

    const queryParams = new URLSearchParams(params).toString();
    const url = `${API_ENDPOINTS.getProjects.url}&${queryParams}`;
    try {
        const response = await fetch(url, {
            signal,
            headers: {
                Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
                Accept: 'application/vnd.github.v3+json',
            },
        });

        // Log only after the request settles. With StrictMode, the first run is
        // aborted before await resolves, so these do not fire twice in dev.
        if (import.meta.env.DEV) {
            console.log(url);
            console.log("Projects request completed 🚀");
        }

        //Configure the request to handle errors
        if (!response.ok) {
            throw new Error(`Error fetching projects: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        if (error.name === 'AbortError') throw error;
        console.log(`Error fetching projects: ${error.message}`);
    }

}