import React,  { Component } from 'react';

import {observer} from "mobx-react";

import style from './style.css';

@observer
class Button extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let cls = style.btn;

        if(this.props.isActive){
            cls = `${cls} ${style.active}`
        }

        return <button onClick={this.props.onClick} className={cls}>{this.props.text}</button>
    }
}

export default Button;