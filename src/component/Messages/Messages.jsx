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
        this.container = null;
    }

    scrollToBottom = () => {
        this.container.scrollTop = this.container.scrollHeight;
    };

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    showModal = () => {
        this.props.MessageStore.showModal();
    };

    left = () => {
        this.props.MessageStore.RootStore.MainStore.left();
    }

    closeModal = () => {
        this.props.MessageStore.closeModal();
    }

    newPartner = () => {
        this.props.MessageStore.closeModal();
        this.props.MessageStore.RootStore.FilterStore.newDialog();
    };

    toMain = () => {
        this.props.MessageStore.closeModal();
        this.props.MessageStore.RootStore.MainStore.toMain();
    };

    render() {
        const messages = toJS(this.props.MessageStore.messages).map((message) => {
            return <Message {...message} />;
        });

        return (
            <div className={style.container}>
                {
                    this.props.MessageStore.isShowModal &&
                    <React.Fragment>
                        <div className={style.modalHover}>
                        </div>
                        <div className={style.modal}>
                            <div className={style.title} >
                                Завершить активную переписку?
                        </div>
                            <div className={style.btns}>
                                <div className={style.leftDialog} onClick={this.left}>
                                    Завершить
                                </div>
                                <div className={style.cls} onClick={this.closeModal}>
                                    Отменить
                            </div>
                            </div>
                            <div className={style.newPartner} onClick={this.newPartner}>
                                Найти нового собеседника
                        </div>
                        </div>
                    </React.Fragment>
                }
                {
                    this.props.MessageStore.isShowLeftModal &&
                    <React.Fragment>
                        <div className={style.modalHover}>
                        </div>
                        <div className={style.modal}>
                            <div className={style.title}>
                                Cобеседник покинул разговор
                        </div>
                            <div className={style.btns}>
                                <div className={style.cls} onClick={this.newPartner}>
                                    Найти нового собеседника
                                </div>
                            </div>
                            <div className={style.newPartner} onClick={this.toMain}>
                                Главная
                        </div>
                        </div>
                    </React.Fragment>
                }
                <div className={style.header}>
                    <div className={style.left}>
                        <div className={style.close} onClick={this.showModal}>
                        </div>
                    </div>
                    <div className={style.center}>
                        <div className={style.logo}></div>
                    </div>
                    <div className={style.right}>
                        <div className={style.menu}>
                        </div>
                    </div>
                </div>
                <ul ref={(container) => { this.container = container }} className={style.messages}>
                    {messages}
                </ul>
                {
                    this.props.MessageStore.isTyping &&
                    <div className={style.typing}>
                        Собеседник печатает
                        <div className={style.typingIcon}>
                        </div>
                    </div>
                }
                <Editor MessageStore={this.props.MessageStore} />
            </div>
        );
    }
}

export default Messages;