class Auth {
    constructor(api) {
        if (!api) {
            throw ('api null');
        }

        this.Api = api;
        this.corePath = '/auth';
    }

    signin() {
        return new Promise((resolve, reject) => {
            this.Api.ajax(`${this.corePath}/signin`, 'Post', {
            })
                .then((data) => {
                    resolve(data);
                }, (error) => {
                    reject(error);
                });
        });
    }
}

export default Auth;