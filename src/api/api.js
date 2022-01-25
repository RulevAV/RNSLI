import axios from "axios";

const ServerAuth = "http://localhost:8600/api";
const AuthGuery = axios.create({
    withCredentials: true,
    baseURL: ServerAuth,
    headers: {
        'Content-Type': "application/json;charset=utf-8"
    }
});


export const AuthAPI = {
    Login: (Login, Password) => {
        let email = "admin";
        let password = "0000";
        let data = JSON.stringify({ email, password });
        //let data = { email: "admin", password: "0000" };
        return AuthGuery.post('login', data)
            .then(response => {
                console.log(response);
                return response;
            }).catch(error => {
                console.log(error);
            })
    },
}