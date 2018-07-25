import {observable, computed, action, asMap, autorun, toJS} from 'mobx';

import Api from  '../common/api/api';
import Signalr from '../common/Signalr';

class MainStore {
    constructor(data, rootStore) {
        this.apiUrl = data.api;

        this.Signalr = new Signalr(this);
        this.Api = new Api(rootStore);
        this.RootStore = rootStore;
    }

    @action connect = () => {
        this.Signalr.connect();
    }
}


export default MainStore;
export {MainStore};