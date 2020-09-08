import * as actions from "./actions";
import * as API from "../../API";


/**
 * create  human resources operation
 */
export const login = (payload) => (dispatch) => {
    dispatch(actions.loginStart());
    API.login(payload)
        .then((res) => dispatch(actions.loginSuccess(res)))
        .catch((err) => dispatch(actions.loginFailure(err)));
};
