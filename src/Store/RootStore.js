import MainStore from '../Store/MainStore';
import AuthStore from '../Store/AuthStore';

class RootStore {
    constructor(data) {
        this.MainStore = new MainStore(data, this);
        this.AuthStore = new AuthStore(data,this);
    }
}

export default RootStore;