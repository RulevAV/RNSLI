function CreateProfile(title, massage, img) {
    return {
        title,
        massage,
        img
    }
}
export const initialState = {
    Profiles: [
        CreateProfile("1", "123", "https://i0.wp.com/coroklet.ru/wp-content/uploads/2017/08/2x9mdy-dhfm_ru-devushka-volosy-kra.jpg"),
        CreateProfile("2", "123", "https://ona-znaet.ru/_pu/19/72349760.jpg"),
        CreateProfile("3", "123", null),
        CreateProfile("4", "123", null),
        CreateProfile("5", "123", null),
        CreateProfile("6", "123", null),
    ]
};

export const MainReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }
}

export const MainAction = {
}
