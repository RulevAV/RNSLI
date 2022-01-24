import axios from "axios";

const ServerAuth = "https://maagserver/AuthServer/";
const AuthGuery = axios.create({
    withCredentials: true,
    baseURL: ServerAuth,
    headers: {
        'Content-Type': "application/json;charset=utf-8"
    }
});


export const AuthAPI = {
    Login: (Login, Password) => {
        let data = JSON.stringify({ Email, Password });
        return AuthGuery.post('api/user/token', data)
            .then(response => {
                return response;
            })
    },
}