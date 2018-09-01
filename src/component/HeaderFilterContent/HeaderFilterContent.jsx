import React, { Component } from 'react';

import { observer } from "mobx-react";

import style from './style.css'

@observer
class HeaderFilterContent extends Component {
    constructor(props) {
        super(props);
    }

    getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    }

    render() {
        return <div className={style.content}>
            <div className={style.title}>
                {this.getRandomIntInclusive(1000, 2000)} пользователя находятся в чате.
            </div>
            <div className={style.info}>
                {this.getRandomIntInclusive(50, 200)} пользователей находятся в поиске.
            </div>
        </div>
    }
}

export default HeaderFilterContent;