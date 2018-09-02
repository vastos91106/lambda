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

    sent = () => {
        this.props.MessageStore.post(this.state.html);
        this.setState({ html: '' });;
    };

    newDialog = () => {
        const root = this.props.MessageStore.RootStore;
        root.MainStore.left();
        root.FilterStore.newDialog();
    };

    onChange = (e) => {
        this.setState({ html: e.currentTarget.innerText });;
    }

    onKeyPressEditor = (event) => {
        const state = Object.assign({}, this.state);
        let text = state.html += event.key;

        if (event.charCode === 13 && !event.shiftKey) {
            this.sent();
            this.stopEvent(event);
        } else if (text.length > this.maxTextLength) {
            if (event.charCode !== 8)
                this.stopEvent(event);
        }
    }

    render() {
        return (
            <div className={style.editor}>
                <ContentEditable
                    className={style.input}
                    html={this.state.html}
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPressEditor}
                />
                <div className={style.btns}>
                    <a href="#" onClick={this.newDialog} className={`${style.button3} ${style.button3_cancel}`}>Новый собеседник</a>
                    <a href="#" onClick={this.sent}  className={style.button3}>Отправить</a>
                </div>
            </div>
        )
    }
}

export default Editor;
