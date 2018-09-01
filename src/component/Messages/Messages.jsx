import React, { Component } from 'react';
import ScrollArea from 'react-scrollbar';
import { observer } from "mobx-react";
import { toJS } from 'mobx';
import Message from '../Message/Message';
import Editor from '../Editor/Editor';
import style from './style.css';

@observer
class Messages extends Component {
    constructor(props) {
        super(props);

        this.state = [
            {
                date: '10:12, Сегодня',
                text: 'Привет',
                type: 'in'
            },
            {
                date: '10:12, Сегодня',
                text: 'Привет',
                type: 'out'
            },
            {
                date: '10:12, Сегодня',
                text: 'Привет',
                type: 'out'
            },
            {
                date: '10:12, Сегодня',
                text: 'Привет',
                type: 'out'
            },
            {
                date: '10:12, Сегодня',
                text: 'Привет',
                type: 'out'
            },
            {
                date: '10:12, Сегодня',
                text: 'Привет',
                type: 'out'
            },
            {
                date: '10:12, Сегодня',
                text: 'Привет',
                type: 'out'
            },
            {
                date: '10:12, Сегодня',
                text: 'Привет',
                type: 'out'
            }
        ];
    }

    render() {
        const messages = toJS(this.props.RootStore.MessageStore.messages).map((message) => {
            return <Message {...message} />;
        });

        return (
            <React.Fragment>
                <ScrollArea
                    speed={0.8}
                    className={style.messages}
                    horizontal={false}
                >
                    <ul>
                        {messages}
                    </ul>
                </ScrollArea>
                <Editor />
            </React.Fragment>
        );
    }
}

export default Messages;