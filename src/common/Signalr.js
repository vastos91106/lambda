import * as signalR from '@aspnet/signalr';
import {
    resolve
} from 'path';

class Signalr {
    constructor(MainStore) {

        this.connection = null;
        this.MainStore = MainStore;
    }

    connect = () => {
        return new Promise((resolve, reject) => {
            const url = `${this.MainStore.apiUrl}/v1/chat`;
            this.connection = new signalR.HubConnectionBuilder()
                .withUrl(url)
                .build();

            this.connection.start()
                .then((resolve))
                .catch(reject);

            this.connection.on('StartConversationWasCanceled', () => {
                this.MainStore.RootStore.FilterStore.cancel();
            });

            this.connection.on('StartConversation', (groupId) => {
                this.MainStore.join(groupId);
            });

            this.connection.on('EndConversation', (par) => {
                alert('Собеседник покинул диалог');
                this.MainStore.left();
            });

            this.connection.on('Sent', (text) => {
                this.MainStore.RootStore.MessageStore.get(text);
            });

        });
    };



    invoke = (method, args = []) => {
        return new Promise((resolve, reject) => {
            this.connection.invoke(method, ...args)
                .then((resp) => {
                    resolve(resp);
                })
                .catch((e) => {
                    reject(e)
                });
        })
    };
}

export default Signalr;