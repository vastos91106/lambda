import MainStore from '../Store/MainStore';
import AuthStore from '../Store/AuthStore';
import FilterStore from '../Store/FilterStore';
import MessageStore from '../Store/MessageStore';

class RootStore {
    constructor(data) {
        this.MainStore = new MainStore(data, this);
        this.AuthStore = new AuthStore(data, this);
        this.FilterStore = new FilterStore(data, this);
        this.MessageStore = new MessageStore(data, this);
    }
}

export default RootStore;