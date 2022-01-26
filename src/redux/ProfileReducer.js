import { AuthAPI } from "../api/api";
export const initialState = {
    photo: "https://ona-znaet.ru/_pu/19/72349760.jpg",
    lastName: "Иванов",
    firstName: "Иван",
    patronymic: "Иванович"
};

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PROFILE_SAVE":
            return {
                ...action.data
            };
        default: return state;
    }
}

export const ProfileAction = {
    Save: (photo, lastName, firstName, patronymic) => ({
        type: "PROFILE_SAVE",
        data: {
            photo,
            lastName,
            firstName,
            patronymic
        }
    }),
}

export const ProfileActionThunkCreator = {
    Client: () => {
        return async (dispatch) => {
            AuthAPI.Client().then(profile => {
                dispatch(ProfileAction.Save("photo", profile.surname, profile.name, profile.patronymic));
                dispatch(AuthorizationAction.Login());
            }).catch(error => {
                dispatch(AuthorizationAction.Logout());
            });
        }

    },
    Clients: () => {

        return async (dispatch) => {
            AuthAPI.Clients().then(clients => {
                //console.log(clients[0]);
                //dispatch(ProfileAction.Save("photo", profile.surname, profile.name, profile.patronymic));
                //dispatch(AuthorizationAction.Login());
            });
        }
    },
}
