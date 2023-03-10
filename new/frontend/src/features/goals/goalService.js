import axios from 'axios'

const API_URL = '/api/goals/'

//create goal

const createGoal = async (goalData) =>{
    const config = {
        headers:{
            // Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, goalData, config)
    return response.data
}

// get goals
const getGoals = async () =>{
    const config = {
        headers:{
            // Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config)
    return response.data
}


const goalService = {
    createGoal,
    getGoals
}

export default goalService


