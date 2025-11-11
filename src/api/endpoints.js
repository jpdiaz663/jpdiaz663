
const USER = 'juanrraider666';


const API_ENDPOINTS = {
    getProjects: {
        method: 'GET',
        url: `https://api.github.com/users/${USER}/repos?sort=updated`,
        description: 'Fetch all repos'
    },
}


export default API_ENDPOINTS;