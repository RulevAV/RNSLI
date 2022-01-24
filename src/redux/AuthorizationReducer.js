import { AuthAPI } from "../api/api";
export const initialState = {
    Auth: false,
};

export const AuthorizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return { Auth: true };
        case "LOGOUT":
            return { Auth: false };
        default: return state;
    }
}

export const AuthorizationAction = {
    Login: () => ({ type: "LOGIN" }),
    Logout: () => ({ type: "LOGOUT" }),
}
export const AuthorizationActionThunkCreator = {
    Login: (Login, Password) => {
        return async (dispatch) => {
            AuthAPI.Login(Login, Password);
        }
    },
    Logout: () => {
        return async (dispatch) => {


        }
    },

}
