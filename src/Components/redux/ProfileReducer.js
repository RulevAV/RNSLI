export const initialState = {
    photo: "https://ona-znaet.ru/_pu/19/72349760.jpg",
    lastName: "Иванов",
    firstName: "Иван",
    Patronymic: "Иванович"
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
    Save: (photo, lastName, firstName, Patronymic) => ({
        type: "PROFILE_SAVE",
        data: {
            photo,
            lastName,
            firstName,
            Patronymic
        }
    }),
}
