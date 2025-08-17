

const API_ENDPOINTS = {
    getUser: {
        method: 'GET',
        url: '/api/user',
        description: 'Fetch user details'
    },
    updateUser: {
        method: 'PUT',
        url: '/api/user/update',
        description: 'Update user details'
    },
    deleteUser: {
        method: 'DELETE',
        url: '/api/user/delete',
        description: 'Delete user account'
    },
    getProjects: {
        method: 'GET',
        url: 'https://api.github.com/users/juanrraider666/repos?sort=updated&per_page=10',
        description: 'Fetch all repos'
    },
    createPost: {
        method: 'POST',
        url: '/api/posts/create',
        description: 'Create a new post'
    },
    updatePost: {
        method: 'PUT',
        url: '/api/posts/update/:id',
        description: 'Update an existing post'
    },
    deletePost: {
        method: 'DELETE',
        url: '/api/posts/delete/:id',
        description: 'Delete a post by ID'
    }
}


export default API_ENDPOINTS;