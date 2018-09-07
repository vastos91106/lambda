import {
    observable,
    action,
} from 'mobx';

class MessageStore {
    constructor(data, rootStore) {
        this.RootStore = rootStore;
    }

    @observable messages = [];

    @observable isTyping = false
    @observable timerId = null;
    @observable isShowModal = false;
    @observable isShowLeftModal = false;


    @action showModal = () => {
        this.isShowModal = true;
        this.isShowLeftModal = false;

    };

    @action showLeftModal = () => {
        this.isShowModal = false;
        this.isShowLeftModal = true;
        this.isTyping = false;
    }

    @action closeModal = () => {
        this.isShowModal = false;
        this.isShowLeftModal = false;
    };

    @action userTyping = () => {
        this.RootStore.MainStore.Signalr.invoke('Typing', [this.RootStore.MainStore.groupId])
            .then()
            .catch((e) => {
                console.log(e);
            })
    };

    @action typing = () => {
        let self = this;

        this.isTyping = true;

        if (!!this.timerId) {
            clearTimeout(this.timerId);
            this.timerId = null;
        }

        this.timerId = setTimeout(() => {
            self.isTyping = false;
        }, 1000, self)
    };

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
    };

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