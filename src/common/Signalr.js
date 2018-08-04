import * as signalR from '@aspnet/signalr';
import { resolve } from 'path';

class Signalr {
    constructor(MainStore) {

        this.connection = null;
        this.MainStore = MainStore;
    }

    connect = () => {
        const url = `${this.MainStore.apiUrl}/chat`;
        this.connection = new signalR.HubConnectionBuilder()
            .withUrl(url)
            .build();


        this.connection.start()
            .then()
            .catch((e) => {
                if (e.statusCode === 401) {
                    this.MainStore.RootStore.AuthStore.updateAuth(false);
                }
            });
    }

    invoke = (method, args) => {
        return new Promise((resolve, reject) => {
            this.connection.invoke(method, ...args)
                .then((resp) => {
                    resolve(resp);
                })
                .catch((e)=>{reject(e)});
        })
    };
}

export default Signalr;