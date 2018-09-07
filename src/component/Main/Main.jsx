import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { observer } from "mobx-react";

import Filter from '../MainFilterContent/MainFilterContent';
import Messages from '../Messages/Messages';

import style from './style.css';
@observer
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        this.props.MainStore.connect()
            .then(() => {
                this.setState({ isLoading: false })
            });
    }

    render() {
        const MessageStore = this.props.MainStore.RootStore.MessageStore;
        const FilterStore = this.props.MainStore.RootStore.FilterStore;

        let content = null;

        if (this.props.MainStore.type === 'init' || this.props.MainStore.type === 'loading') {
            content = <Filter FilterStore={FilterStore} />
        } else {
            content = <Messages MessageStore={MessageStore} />
        }

        return <React.Fragment>
            {
                this.state.isLoading &&
                <div className={style.container}>
                    <div className={style.icon}>
                    </div>
                    <div className={style.loader}>
                    </div>
                </div>
            }
            {
                !this.state.isLoading &&
                content
            }

        </React.Fragment>;
    }
}

export default Main;