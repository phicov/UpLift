import axios from 'axios'

const API_URL = '/api/forums/'

// Create new goal
const createForum = async (forumData, token) => {
    const config = {
    headers: {
        Authorization: `Bearer ${token}`,
    },
    }

    const response = await axios.post(API_URL, forumData, config)

    return response.data
}

// Get user goals
const getForums = async (token) => {
    const config = {
    headers: {
        Authorization: `Bearer ${token}`,
    },
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

// Delete user Forum
const deleteForum = async (forumId, token) => {
    const config = {
    headers: {
        Authorization: `Bearer ${token}`,
    },
    }

    const response = await axios.delete(API_URL + forumId, config)

    return response.data
}

const goalService = {
    createForum,
    getForums,
    deleteForum,
}

export default forumService