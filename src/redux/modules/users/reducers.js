import * as types from './types';


const initialUsers = {
    data: [],
    loading: false,
    total: 1,
    page: 1,
    error: null,
}

export const users = (state = initialUsers, action) => {
    switch (action.type) {
        case types.GET_USERS_START:
            return { ...state, loading: true }
        case types.GET_USERS_SUCCESS:
            return { ...state, loading: false, data: action.payload }
        case types.GET_USERS_FAILURE:
            return { ...state, loading: false, error: action.payload }
        default: 
            return state
    }
}