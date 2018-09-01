import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable';

import Button from '../Button/Button';
import style from './style.css'

class Editor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            html: ''
        }
    }

    render() {
        return (
            <div className={style.editor}>
                <ContentEditable
                    className={style.input}
                    html={this.state.html} // innerHTML of the editable div
                />
                <div className={style.btns}>
                    <button className={`${style.btn}`}>Отправить</button>
                    <button className={`${style.btn} ${style.btn_exit}`}>Новый собеседник</button>
                </div>
            </div>
        )
    }
}

export default Editor;
