import {
    observable,
    action,
} from 'mobx';

class MessageStore {
    constructor(data, rootStore) {
        this.RootStore = rootStore;
    }

    @observable messages = [];

    @action post = (text) => {

        this.RootStore.MainStore.Signalr.invoke('Sent', [this.RootStore.MainStore.groupId, text])
            .then(((r) => {
                this.RootStore.MessageStore.messages.push({
                    date: new Date(),
                    text: text,
                    type: 'out'
                });
            }))
            .catch((e) => {
                console.log(e);
                alert('Ошибка отправки сообщения');
            })
    }

    @action get = (text) => {
        this.RootStore.MessageStore.messages.push({
            date: new Date(),
            text: text,
            type: 'in'
        });
    };
}


export default MessageStore;
export {
    MessageStore
};