import React, { Component } from 'react';

import Message from '../Message/Message';

class Messages extends Component {
    constructor(props) {
        super(props);

        this.state = [
            {
                date: '10:12, Сегодня',
                text: 'Привет',
                type:'in'
            },
            {
                date: '10:12, Сегодня',
                text: 'Привет',
                type:'out'
            },
            {
                date: '10:12, Сегодня',
                text: 'Привет',
                type:'out'
            }
        ];
    }

    render() {
        const messages = this.state.map((message) => {
            return <Message {...message}/>;
        });

        return (
            <ul>
                {messages}
            </ul>
        );
    }
}

export default Messages;