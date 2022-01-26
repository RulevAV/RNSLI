import { AuthAPI } from "../api/api";
import { ProfileAction } from "./ProfileReducer";
export const initialState = {
    Auth: true,
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
            AuthAPI.Login(Login, Password).then(profile => {
                //   console.log(profile);                //name,surname
                //console.log(profile);
                dispatch(ProfileAction.Save("photo", profile.surname, profile.name, profile.patronymic));
                dispatch(AuthorizationAction.Login());
            });
        }
    },
    Logout: () => {
        return async (dispatch) => {
            AuthAPI.Logout().then(profile => {
                dispatch(AuthorizationAction.Logout());
            });

        }
    },

}
