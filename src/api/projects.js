
import API_ENDPOINTS from './endpoints';


export const projectsapi = async () => {
    const url = API_ENDPOINTS.getProjects.url;

    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `token +++`,
                Accept: 'application/vnd.github.v3+json',
            },
        })

        //Configure the request to handle errors
        if (!response.ok) {
            throw new Error(`Error fetching projects: ${response.statusText}`);
        }

        return  await response.json();
    } catch (error) {
        console.log(`Error fetching projects: ${error.message}`);
    }

}