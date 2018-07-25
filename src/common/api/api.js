export default class Api {
    constructor(rootStore) {
        this.ajax = this.ajax.bind(this);
        this.RootStore = rootStore;
    }

    ajax(url, method, data) {
        return new Promise((resolve, reject) => {
            const isFormData = data instanceof FormData;
            const isPost = method.toLowerCase() === 'post';
            const headersObj = {};
            const mainStore = this.RootStore.MainStore;

            if (!isFormData && isPost) {
                headersObj['Content-Type'] = 'application/json';
            }

            let sendingData = isPost ? data : null;
            if (!!sendingData && !isFormData) {
                sendingData = JSON.stringify(sendingData);
            }

            headersObj['Authorization'] = mainStore.token;

            const headers = new Headers(headersObj);



            return fetch(mainStore.apiUrl + '/api' + url, {
                body: sendingData,
                headers,
                method,
                mode:'cors',
                credentials: 'include'
            }).then((response) => {
                if (response.status === 500 || response.status === 401 || response.status === 400) {
                    reject(response);
                } else {
                    resolve(response);

                }
            }).catch((error) => {
                console.log(error);
                reject(error);
            });
        });
    }
}