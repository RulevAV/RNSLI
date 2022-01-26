import axios from "axios";
const ServerAuth = "http://localhost:8600/";

let Token;
//"http://localhost:8600/api/service/clients"
const AuthGuery = axios.create({
    //withCredentials: true,
    baseURL: ServerAuth,
    headers: {
        'Content-Type': "application/json;charset=utf-8",
        //Cookie: ""
    }
});


export const AuthAPI = {
    Login: (Login, Password) => {
        //let email = "admin";
        //let password = "0000";
        let data = JSON.stringify({ email: Login, password: Password });
        //let data = { email: "admin", password: "0000" };
        return AuthGuery.post('api/login', data)
            .then(response => {
                Token = response.data.token;
                const profile = response.data.client.profile;
                return profile;
            }).catch(error => {
            })
    },
    Logout: () => {
        return AuthGuery.get('api/logout')
            .then(response => {
                return response;
            }).catch(error => {
            })
    },
    Client: () => {
        return AuthGuery.get('api/client')
            .then(response => {
                const clients = response.data.client;
                console.log(clients);
                const profile = response.data.client.profile;
                return profile;
            }).catch(error => {
                return error;
            })
    },
    Clients: () => {
        //http://localhost:8600/api/client
        let data = { profile: { surname: "Овчинников", name: "Егор", patronymic: "test2" } };
        // let config = {
        //     headers: {
        //         'Authorization': `Bearer  ${Token}`
        //     },
        // }
        data = JSON.stringify(data);

        return AuthGuery.put('api/client', data)
            .then(response => {
                alert("+");
                const clients = response.data.client;
                console.log(clients);
                //const profile = response.data.client.profile;
                return clients;
            }).catch(error => {
                console.log(error);
                alert("-");
            })
    }
}