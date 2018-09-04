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

        this.props.MessageStore.post(value);
        this.input.lastHtml = '';
        this.setState({ html: '' });
    };

    newDialog = () => {
        const root = this.props.MessageStore.RootStore;
        root.MainStore.left();
        root.FilterStore.newDialog();
    };

    onChange = (e) => {
        this.setState({ html: e.target.value });
    };

    onKeyPressEditor = (event) => {
        const state = Object.assign({}, this.state);

        if (event.charCode === 13) {
            this.sent();
            event.stopPropagation();
        }
    };

    render() {
        return (
            <div className={style.editor}>
                <ContentEditable
                    ref={(ref) => {
                        this.input = ref;
                    }}
                    className={style.input}
                    html={this.state.html}
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPressEditor}
                />
                <div className={style.btns}>
                    <a href="#" onClick={this.newDialog} className={`${style.button3} ${style.button3_cancel}`}>Новый
                        собеседник</a>
                    <a href="#" onClick={this.sent} className={style.button3}>Отправить</a>
                </div>
            </div>
        );
    }
}

export default Editor;
