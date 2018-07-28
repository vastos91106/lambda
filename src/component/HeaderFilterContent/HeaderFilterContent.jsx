import React,  { Component } from 'react';

import {observer} from "mobx-react";

import style from './style.css'

@observer
class HeaderFilterContent extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return <div className={style.content}>
            <div className={style.title}>
                2804 пользователя находятся в чате.
            </div>
            <div className={style.info}>
                196 пользователей находятся в поиске.
            </div>
        </div>
    }
}

export default HeaderFilterContent;