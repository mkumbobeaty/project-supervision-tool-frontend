import * as types from './types';

import { combineReducers } from "redux";

const initialContracts = {
    data: null,
    loading: false,
    total: 0,
    page: 1,
    error: null,
    contract: {},
    showForm: false,
}

const contractsData = (state = initialContracts, action) => {
    switch (action.type) {
        case types.GET_CONTRACTS_START:
            return { ...state, loading: true }
        case types.GET_CONTRACTS_SUCCESS:
            return { ...state, loading: false, data: action.payload, 
                total: action.payload.meta.total, page: action.payload.meta.current_page }
        case types.GET_CONTRACTS_FAILURE:
            return { ...state, loading: false, error: action.payload }
        case types.CREATE_CONTRACT_START:
            return { ...state, loading: true };
        case types.CREATE_CONTRACT_SUCCESS:
            return { ...state, contract: action.payload, loading: false };
        case types.CREATE_CONTRACT_FAILURE:
            return { error: action.payload.error };
        case types.EDIT_CONTRACT_START:
            return { ...state, loading:true };
        case types.EDIT_CONTRACT_SUCCESS:
            return { ...state, contract: action.payload, loading:false };
        case types.EDIT_CONTRACT_FAILURE:
            return action.payload;
        case types.DELETE_CONTRACT_START:
            return { ...state, loading: true };
        case types.DELETE_CONTRACT_SUCCESS:
            return { ...state, contract: action.payload, loading: false };
        case types.DELETE_CONTRACT_FAILURE:
            return action.payload;
        case types.OPEN_FORM:
                return { ...state, showForm: true };
        case types.CLOSE_FORM:
                return { ...state, showForm: false };
        default:
            return state
    }
}

export const contracts = combineReducers({
    contractsData,
});