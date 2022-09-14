import axios from 'axios'

const API_URL = '/api/forums/'

// create new forum
const createForum = async (forumData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, forumData, config)

    return response.data
}

// Get user Forums
const getForums = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}


const forumService = {
    createForum,
    getForums
}

export default forumService