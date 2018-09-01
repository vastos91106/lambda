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
        this.scroll = null;
    }


    render() {
        let self = this;
        if (!!this.scroll) {
            setTimeout(function (self) {
                self.scroll.scrollYTo(10000);
            }, 0, self);

        }
        const messages = toJS(this.props.RootStore.MessageStore.messages).map((message) => {
            return <Message {...message} />;
        });

        return (
            <React.Fragment>
                <ScrollArea
                    ref={(ref => { this.scroll = ref })}
                    speed={0.8}
                    className={style.messages}
                    horizontal={false}
                >
                    <ul>
                        {messages}
                    </ul>
                </ScrollArea>
                <Editor MessageStore={this.props.RootStore.MessageStore} />
            </React.Fragment>
        );
    }
}

export default Messages;