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
                console.log(r);
            }))
            .catch((e) => {
                console.log(e);
            });
    };

    @action newDialogBot = () => {
        return new Promise((resolve, reject) => {
            this.RootStore.MainStore.Signalr.invoke('StartConversationWithBot')
                .then(() => {})
                .catch((e) => {
                    alert(`Oшибка :( \n ${e}`);
                    this.RootStore.MainStore.type = 'init';
                });
        });
    };

    @action newDialog = (sex = 0) => {
        this.sex = sex;
        this.RootStore.MainStore.type = 'loading';

        return new Promise((resolve, reject) => {
            this.RootStore.MainStore.Signalr.invoke('StartConversation')
                .then(() => {
                    setTimeout((self) => {
                        if (self.RootStore.MainStore.type === 'loading') {
                            self.newDialogBot();
                        }
                    }, 10000, this);
                })
                .catch((e) => {
                    alert(`Oшибка :( \n ${e}`);
                    this.RootStore.MainStore.type = 'init';
                });
        });
    };

    @action cancel = () => {
        this.RootStore.MainStore.type = 'init';
        return new Promise((resolve, reject) => {
            this.RootStore.MainStore.Signalr.invoke('CancelOfStartConversation')
                .then()
                .catch();
        });
    };
}


export default FilterStore;
export {
    FilterStore
};