import React,  { Component } from 'react';

import {observer} from "mobx-react";

import style from './style.css';

@observer
class ColFilterContent extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
                <div className={style.col}>
                    <span className={style.header}>
                        {this.props.header}
                    </span>
                    <div className={style.content}>
                        {this.props.content}
                    </div>
                </div>
        )
    }
}

export default ColFilterContent;