import * as types from './types';

// action creator for fetching contracts
export function getContractsStart (params) {
    return {
        type: types.GET_CONTRACTS_START,
        payload: params
    }
}

export function getContractsSuccess (contracts) {
    return {
        type: types.GET_CONTRACTS_SUCCESS,
        payload: contracts
    }
}

export function getContractsFailure (error) {
    return {
        type: types.GET_CONTRACTS_FAILURE,
        payload: error
    }
}

export function createContractStart(contract) {
  return {
    type: types.CREATE_CONTRACT_START,
    payload:contract,
  };
}

export function createContractSuccess(contract) {
  return {
    type: types.CREATE_CONTRACT_SUCCESS,
    payload: contract,
  };
}

export function createContractFailure(error) {
  return {
    type: types.CREATE_CONTRACT_FAILURE,
    payload: error,
  };
}

// editing 
export function editStart(contract) {
  return {
    type: types.EDIT_CONTRACT_START,
    payload:contract
  };
}

export function editContractSuccess(contract) {
  return {
    type: types.EDIT_CONTRACT_SUCCESS,
    payload: contract,
  };
}

export function editContractFailure(error) {
  return {
    type: types.EDIT_CONTRACT_FAILURE,
    payload: error,
  };
}

// deleting Contract
export function deleteContractStart(contract_id) {
    return {
      type: types.DELETE_CONTRACT_START,
      payload:contract_id
    };
  }
  
  export function deleteContractSuccess(contract_id) {
    return {
      type: types.DELETE_CONTRACT_SUCCESS,
      payload: contract_id,
    };
  }
  
  export function deleteContractFailure(error) {
    return {
      type: types.DELETE_CONTRACT_FAILURE,
      payload: error,
    };
  }