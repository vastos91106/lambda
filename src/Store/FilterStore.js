import {
    observable,
    computed,
    action,
    asMap,
    autorun,
    toJS
} from 'mobx';
import {
    resolve
} from 'upath';

class FilterStore {
    constructor(data, rootStore) {
        this.RootStore = rootStore;
    }

    @observable sex = 0;
    @observable year = 21;;

    @observable partnerSex = 0;
    @observable partnerYears = [17];


    @action post = () => {

        const searchCriteria = {
            GenderType: this.sex,
            TargetGenderType: this.partnerSex,
            AgeCategory: this.getServerYear(this.year),
            TargetAgeCategories: this.partnerYears.map((year => {
                return this.getServerYear(year);
            }))
        };

        this.RootStore.MainStore.Signalr.invoke('Search', [searchCriteria])
            .then(((r) => {
                console.log(r)
            }))
            .catch((e) => {
                console.log(e)
            })
    }

    getServerYear = (year) => {
        switch (year) {
            case 17:
                return {
                    MinAge: 0,
                    MaxAge: 17
                }

            case 21:
                return {
                    MinAge: 18,
                    MaxAge: 21
                }

            case 25:
                return {
                    MinAge: 22,
                    MaxAge: 25
                }

            case 35:
                return {
                    MinAge: 26,
                    MaxAge: 80
                }
        }
    }

    @action newDialog = () => {
        this.RootStore.MainStore.type = 'loading';
        console.log(11);
        return new Promise((resolve, reject) => {
            this.RootStore.MainStore.Signalr.invoke('StartConversation')
                .then(()=>{
                   
                })
                .catch((e)=>{
                    alert(`Oшибка :( \n ${e}`)
                    this.RootStore.MainStore.type= 'init';
                })
        });
    };

    @action cancel = () => {
        debugger;
        this.RootStore.MainStore.type = 'init';
        return new Promise((resolve, reject) => {
            this.RootStore.MainStore.Signalr.invoke('CancelOfStartConversation')
                .then()
                .catch()
        });
    };
}


export default FilterStore;
export {
    FilterStore
};