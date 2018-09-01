import React, { Component } from 'react';
import { observer } from "mobx-react";
import moment from 'moment';
import style from './style.css';

const Message = (props) => {
const time =moment(props.date).format('HH:MM')
    return (
        <li className={`${style.message} ${props.type === 'out' ? style.message_out : ' '}`}>
            <div className={`${style.titleContainer} ${props.type === 'out' ? style.titleContainer_out : ''}`}>
                <span className={style.date}>{time}</span>
                <i className={style.icon}></i>
            </div>
            <div
                className={`${style.textContainer} ${props.type === 'out' ? style.textContainer_out : style.textContainer_in}`}>
                {props.text}
            </div>
        </li>
    );
};

export default Message;