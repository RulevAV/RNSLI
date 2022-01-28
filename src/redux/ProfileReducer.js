import { AuthAPI } from "../api/api";
import { AuthorizationAction } from "./AuthorizationReducer";
export const initialState = {
    photo: "https://ona-znaet.ru/_pu/19/72349760.jpg",
    lastName: "Иванов",
    firstName: "Иван",
    patronymic: "Иванович"
};

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PROFILE_SAVE":
            // console.log(action.data);
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
    ClientGet: () => {
        return async (dispatch) => {

            AuthAPI.ClientGet().then(profile => {
                // console.log(profile);
                dispatch(ProfileAction.Save("photo", profile.surname, profile.name, profile.patronymic));
                dispatch(AuthorizationAction.Login());
            }).catch(error => {
                dispatch(AuthorizationAction.Logout());
            });
        }

    },
    ClientPut: (photo, lastName, firstName, patronymic) => {
        return async (dispatch) => {
            AuthAPI.ClientPut(photo, lastName, firstName, patronymic).then(profile => {
                //dispatch(ProfileAction.Save("photo", profile.surname, profile.name, profile.patronymic));
                // dispatch(AuthorizationAction.Login());
            }).catch(error => {
                // dispatch(AuthorizationAction.Logout());
            });
        }

    }
}
