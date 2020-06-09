import {
  GET_HUMAN_RESOURCES_START,
  GET_HUMAN_RESOURCES_SUCCESS,
  GET_HUMAN_RESOURCES_FAILURE,
} from "../actions/index";

const initialState = {
  data: [],
  total: 0,
  initLoading: true,
  loading: false,
  error: null,
  page: 0,
};

export function humanResourcesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HUMAN_RESOURCES_START:
      return { ...state };
    case GET_HUMAN_RESOURCES_SUCCESS:
      return Object.assign(
        {},
        {
          ...state,
          data: action.humanResources.data,
          total: action.humanResources.total,
          page: action.humanResources.page,
          initLoading: false,
          loading: true,
        }
      );
    case GET_HUMAN_RESOURCES_FAILURE:
      return Object.assign({}, { ...state, error: action.message });
    default:
      return state;
  }
}
