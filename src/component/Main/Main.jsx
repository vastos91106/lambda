import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { observer } from "mobx-react";

import History from '../History/History';
import FilterContent from '../FilterContent/FilterContent';
import MessagesContent from '../MessagesContent/MessagesContent';

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
            content = <FilterContent FilterStore={FilterStore} />
        } else {
            content = <MessagesContent MessageStore={MessageStore} />
        }

        return <React.Fragment>
            {
                this.state.isLoading &&
                <div className={style.container}>
                    <div className={style.icon}>
                    </div>
                    <div className={style.text}>
                        Инициализация
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