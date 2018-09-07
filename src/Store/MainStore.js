import {
    observable,
    computed,
    action,
    asMap,
    autorun,
    toJS
} from 'mobx';

import Api from '../common/api/api';
import Signalr from '../common/Signalr';
import {
    resolve
} from 'dns';

class MainStore {
    constructor(data, rootStore) {
        this.apiUrl = data.api;

        this.Signalr = new Signalr(this);
        this.Api = new Api(rootStore);
        this.RootStore = rootStore;
    }

    //init/loading/chat
    @observable type = 'init';
    @observable groupId = '';

    connect = () => {
        return new Promise((resolve, reject) => {
            this.Signalr.connect()
                .then(resolve)
                .catch(reject);
        })
    };

    join = (groupId) => {
        this.type = 'chat';
        this.groupId = groupId;
        this.RootStore.MessageStore.messages = [];
    };

    left = () => {
        this.type = 'chat';
        this.groupId = '';
        this.RootStore.MessageStore.showLeftModal();
        this.Signalr.invoke('EndConversation');
    }

    toMain = () => {
        this.type = 'init';
        this.groupId = '';
    };
}


export default MainStore;
export {
    MainStore
};