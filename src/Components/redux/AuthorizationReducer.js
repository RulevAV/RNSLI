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
            // dispatch(AuthActions.LockScreen(true));
            // AuthAPI.Token(Email,Password).then((response) =>{
            //     let {status,data} = response;
            //     if(status === 200)
            //     {
            //         dispatch(AuthActions.SetUser(data));
            //     }
            // });
            // dispatch(AuthActions.LockScreen(false));

        }
    },
    Logout: () => {
        return async (dispatch) => {
            // AuthAPI.RevokeToken().then((response) => {
            //     dispatch(AuthActions.Logout());
            // });

        }
    },

}
