import {
    observable,
    action,
} from 'mobx';

class MessageStore {
    constructor(data, rootStore) {
        this.RootStore = rootStore;
    }

    @observable messages = [];

    @action post = () => {

        this.RootStore.MainStore.Signalr.invoke('Search', [searchCriteria])
            .then(((r) => {
                console.log(r)
            }))
            .catch((e) => {
                console.log(e)
            })
    }

    @action get = () => {

    };
}


export default MessageStore;
export {
    MessageStore
};