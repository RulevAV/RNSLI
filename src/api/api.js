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
        //let data = JSON.stringify({ Email, Password });
        let email = Login;
        let password = Password;
        let data = JSON.stringify({ email, password });
        console.log(123);
        return AuthGuery.post('api/user/token', data)
            .then(response => {
                console.log(response);
                return response;
            }).catch(error => {
                console.log(error);
            })
    },
}