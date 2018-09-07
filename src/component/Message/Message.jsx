import React, { Component } from 'react';
import { observer } from "mobx-react";
import moment from 'moment';
import style from './style.css';

const Message = (props) => {

    const clsMessage = props.type === 'in' ? `${style.message}` : `${style.message} ${style.message_out}`;

    return (
        <li className={style.wrapper}>
            <div className={clsMessage}>
                {props.text}
            </div>
        </li>
    );
};

export default Message;