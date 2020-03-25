import { ADD_USER } from './action-types'

const initialUsersState = { users: [] }

export const usersReducer = (state = initialUsersState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.user]
            }
        default:
            return state
    }
}
