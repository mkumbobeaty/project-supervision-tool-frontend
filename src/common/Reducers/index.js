import {
  GET_HUMAN_RESOURCES_START,
  GET_HUMAN_RESOURCES_SUCCESS,
  GET_HUMAN_RESOURCES_FAILURE,
  OPEN_HUMAN_RESOURCES_FORM,
  CLOSE_HUMAN_RESOURCES_FORM,
} from "../actions/index";

const initialState = {
  data: [],
  total: 0,
  initLoading: true,
  loading: false,
  error: null,
  showForm: false,
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
          showForm: false,
          loading: true,
        }
      );
    case GET_HUMAN_RESOURCES_FAILURE:
      return Object.assign({}, { ...state, error: action.message });
    case OPEN_HUMAN_RESOURCES_FORM:
      return Object.assign({}, state, { showForm: true });
    case CLOSE_HUMAN_RESOURCES_FORM:
      return Object.assign({}, state, { showForm: false });
    default:
      return state;
  }
}
