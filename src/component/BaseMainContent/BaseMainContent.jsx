import React,  { Component } from 'react';

import {observer} from "mobx-react";

import style from './style.css';

@observer
class BaseMainContent extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return <div className={style.content}>
                <div className={style.header}>{this.props.header}</div>
                <div className={style.main}>{this.props.main}</div>
            </div>
    }
}

export default BaseMainContent;