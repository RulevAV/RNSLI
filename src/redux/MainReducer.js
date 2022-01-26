import { AuthAPI } from "../api/api";
function CreateProfile(lastName, firstName, patronymic, photo) {
    return {
        lastName,
        firstName,
        patronymic,
        photo
    }
}
export const initialState = {
    Profiles: [
        CreateProfile("1", "123", "Patronymic", "https://i0.wp.com/coroklet.ru/wp-content/uploads/2017/08/2x9mdy-dhfm_ru-devushka-volosy-kra.jpg"),
        CreateProfile("2", "123", "Patronymic", "https://ona-znaet.ru/_pu/19/72349760.jpg"),
        CreateProfile("3", "123", "Patronymic", null),
        CreateProfile("4", "123", "Patronymic", null),
        CreateProfile("5", "123", "Patronymic", null),
        CreateProfile("6", "123", "Patronymic", null),
    ]
};

export const MainReducer = (state = initialState, action) => {
    switch (action.type) {
        case "MAIN_CLIENTS":
            return {
                Profiles: [...action.data]
            };
        default: return state;
    }
}

export const MainAction = {
    Save: (clients) => ({
        type: "MAIN_CLIENTS",
        data: clients
    }),
}
export const MainActionThunkCreator = {
    ClientsGet: () => {
        return async (dispatch) => {
            AuthAPI.ClientsGet().then(Clients => {
                let clients = Clients.map(e => {
                    return CreateProfile(e.profile.surname, e.profile.name, e.profile.patronymic, null);
                })
                dispatch(MainAction.Save(clients));
            }).catch(error => {
            });
        }

    }
}

