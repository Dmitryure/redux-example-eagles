import { ADD_USER } from './action-types'

export const addUser = (user) => {
    return {
        type: ADD_USER,
        user
    }
}