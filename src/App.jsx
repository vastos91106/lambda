import React, { Component } from 'react';
import { observer } from "mobx-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import RootStore from './Store/RootStore';
import Main from './component/Main/Main';
import Auth from './component/Auth/Auth';

import style from './style.css';

@observer
export default class App extends Component {
    constructor(props) {
        super(props);

        this.RootStore = new RootStore(props.data);
    }


    render() {
        return (
                <div className={style.container}>
                    <Main  MainStore={this.RootStore.MainStore} />
                </div>
        )
    }
}