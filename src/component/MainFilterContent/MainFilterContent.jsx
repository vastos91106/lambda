import React,  { Component } from 'react';

import {observer} from "mobx-react";

import style from './style.css';

@observer
class MainFilterContent extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return <div className={style.content}>
        </div>
    }
}

export default MainFilterContent;