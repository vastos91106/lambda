import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable';

import style from './style.css';

class Editor extends Component {
    constructor(props) {
        super(props);

        this.input = null;
        this.state = {
            html: ''
        };
    }

    sent = () => {
        const regex = /(<[^>]+>|<[^>]>|<\/[^>]>)/g;
        const value = this.state.html.replace(regex, ' ');

        if (value.length > 0) {
            this.props.MessageStore.post(value);
            this.input.lastHtml = '';
            this.setState({ html: '' });
        }
    };

    onKeyPressEditor = (event) => {
       this.props.MessageStore.userTyping();

        if (event.charCode === 13) {
            this.sent();
            event.stopPropagation();
        }
    };

    onChange = (e) => {
        this.setState({ html: e.target.value });
    };

    render() {
        return (
            <div className={style.editor}>
                <input onKeyPress={this.onKeyPressEditor} onChange={this.onChange} value={this.state.html} ref={(input) => { this.input = input }} placeholder={'Введите текст сообщения'} className={style.input} />
                <div onClick={this.sent} className={style.icon}>
                </div>
            </div>
        );
    }
}

export default Editor;
