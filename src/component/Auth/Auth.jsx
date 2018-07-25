import React,  { Component } from 'react';

import {observer} from "mobx-react";

@observer
class Auth extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.AuthStore.signin();
    }

    render() {
        return <div>
            <h1>Авторизация...</h1>
        </div>;
    }
}

export default Auth;