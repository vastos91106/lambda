import * as signalR from '@aspnet/signalr';

class Signalr{
    constructor(MainStore){

        this.connection = null;
        this.MainStore = MainStore;
    }

    connect = () => {
        const url = `${this.MainStore.apiUrl}/chat`;
        this.connection = new signalR.HubConnectionBuilder()
            .withUrl(url)
            .build();


        this.connection.start()
            .then()
            .catch((e)=>{
                if(e.statusCode===401){
                    this.MainStore.RootStore.AuthStore.updateAuth(false);
                }
            });
    }
}

export default Signalr;