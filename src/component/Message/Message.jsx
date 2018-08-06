import React, { Component } from 'react';

import style from './style.css';

const Message = (props) => {

    return (
        <li className={style.message}>
            <div className={`${style.titleContainer} ${props.type === 'in' ? style.titleContainer_in : ''}`}>
                <span className={style.date}>{props.date}</span>
                <span className={style.author}>{props.type === 'in' ? 'Я' : 'Собеседник'}</span>
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