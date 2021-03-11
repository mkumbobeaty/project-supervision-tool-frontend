import * as types from './types';

// action creator for fetching users
export function getUsersStart () {
    return {
        type: types.GET_USERS_START,
    }
}

export function getUsersSuccess (users) {
    return {
        type: types.GET_USERS_SUCCESS,
        payload: users
    }
}

export function getUsersFailure (error) {
    return {
        type: types.GET_USERS_FAILURE,
        payload: error
    }
}

export function createUserStart(user) {
  return {
    type: types.CREATE_USER_START,
    payload:user,
  };
}

export function createUserSuccess(user) {
  return {
    type: types.CREATE_USER_SUCCESS,
    payload: user,
  };
}

export function createUserFailure(error) {
  return {
    type: types.CREATE_USER_FAILURE,
    payload: error,
  };
}


// deleting User
export function deleteUserStart(user_id) {
    return {
      type: types.DELETE_USER_START,
      payload:user_id
    };
  }
  
  export function deleteUserSuccess(user_id) {
    return {
      type: types.DELETE_USER_SUCCESS,
      payload: user_id,
    };
  }
  
  export function deleteUserFailure(error) {
    return {
      type: types.DELETE_USER_FAILURE,
      payload: error,
    };
  }