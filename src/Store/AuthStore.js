import {observable, computed, action, asMap, autorun, toJS} from 'mobx';
import Api from  '../common/api/auth';

class AuthStore {
    constructor(data, rootStore) {
        this.apiUrl = data.api;

        this.Api = new Api(rootStore.MainStore.Api);
        this.RootStore = rootStore;
    }

    @observable isAuth = true;

    @action  updateAuth(status){
        this.isAuth = status;
    }

    @action signin = ()=>{
        this.Api.signin()
            .then((data)=>{
            this.updateAuth(true);
            })
            .catch((e)=>{
                console.log(e);
            });
    }
}


export default AuthStore;
export {AuthStore};