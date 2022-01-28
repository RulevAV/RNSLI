import axios from "axios";
const ServerAuth = "http://localhost:8600/";

const AuthGuery = axios.create({
    withCredentials: true,
    baseURL: ServerAuth,
    headers: {
        'Content-Type': "application/json;charset=utf-8",
    }
});


export const AuthAPI = {
    Login: (Login, Password) => {
        let data = JSON.stringify({ email: Login, password: Password });
        return AuthGuery.post('api/login', data)
            .then(response => {
                const profile = response.data.client.profile;
                return profile;
            }).catch(error => {
                alert("Ошибка авторизации!");
            })
    },
    Logout: () => {
        return AuthGuery.get('api/logout')
            .then(response => {
                return response;
            }).catch(error => {
            })
    },
    ClientGet: () => {
        return AuthGuery.get('api/client')
            .then(response => {
                const profile = response.data.profile;
                return profile;
            }).catch(error => {
                return error;
            })
    },
    ClientPut: (photo, surname, name, patronymic) => {
        data = JSON.stringify({ profile: { surname, name, patronymic } });
        return AuthGuery.put('api/client', data)
            .then(response => {
                alert("Профиль обновлен!")
                const profile = response.data.client.profile;
                return profile;
            }).catch(error => {
                return error;
            })
    },
    ClientsGet: () => {
        return AuthGuery.get('api/service/clients')
            .then(response => {
                const Clients = response.data;
                return Clients;
            }).catch(error => {
                return error;
            })
    }
}