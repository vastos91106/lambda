import React, { Component } from 'react';
import _ from 'underscore';
import { observer } from "mobx-react";

import style from './style.css';

@observer
class MainFilterContent extends Component {
    constructor(props) {
        super(props);
    }

    onPost = (sex) => {
        this.props.FilterStore.newDialog(sex)
    }

    cancel = () => {
        this.props.FilterStore.cancel().then()
    };

    getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    }

    render() {
        const isLoading = this.props.FilterStore.RootStore.MainStore.type === 'loading';

        const sex = this.props.FilterStore.sex === 0 ? 'девушек' : 'парней';

        return (
            <React.Fragment>
                {
                    isLoading &&
                    <div className={style.container}>
                        <div className={style.icon}>
                        </div>
                        <div className={style.onlineText}>
                            {this.getRandomIntInclusive(1000, 1200)} человек онлайн
                        </div>
                        <div className={style.personText}>
                            {this.getRandomIntInclusive(50, 100)}  {sex} в поиске
                        </div>
                        <div className={style.loader}>
                        </div>
                        <div className={style.cancelBtn} onClick={this.cancel}>
                            Отменить
                        </div>
                    </div>
                }
                {
                    !isLoading &&
                    <div className={style.container}>
                        <div className={style.icon_big}>
                        </div>
                        <div className={style.title}>
                            анонимный чат
                            </div>
                        <div className={style.sexTitle}>
                            Кто ты?
                            </div>
                        <div className={`${style.btn} `} onClick={()=>{this.onPost(0)}}>
                            <div className={style.btn_man}>
                            </div>
                            Парень
                            </div>
                        <div className={`${style.btn}`} onClick={()=>{this.onPost(1)}}>
                            <div className={style.btn_woman}>
                            </div>
                            Девушка
                        </div>
                    </div>
                }
            </React.Fragment>
        )
        /*
        const filterStore = this.props.FilterStore;

        let sex = [];
        let partnerSex = [];

        if (filterStore.sex === 1) {
            sex = [
                <Button onClick={this.onChangeSex} isActive={true} text={'М'} />,
                <Button onClick={this.onChangeSex} text={'Ж'} />
            ];
        } else {
            sex = [<Button onClick={this.onChangeSex} text={'М'} />,
            <Button onClick={this.onChangeSex} isActive={true} text={'Ж'} />
            ]
        }

        if (filterStore.partnerSex === 1) {
            partnerSex = [
                <Button onClick={this.onChangePartnerSex} isActive={true} text={'М'} />,
                <Button onClick={this.onChangePartnerSex} text={'Ж'} />
            ];
        } else {
            partnerSex = [<Button onClick={this.onChangePartnerSex} text={'М'} />,
            <Button onClick={this.onChangePartnerSex} isActive={true} text={'Ж'} />
            ]
        }

        const years = <ul className={style.btnsUl}>
            <li className={style.btnLi}>
                <Button isActive={filterStore.year === 17} onClick={() => { this.onChangeYear(17) }} text={'до 17 лет'} />
            </li>
            <li className={style.btnLi}>
                <Button isActive={filterStore.year === 21} onClick={() => { this.onChangeYear(21) }} text={'от 18 до 21 лет'} />
            </li>
            <li className={style.btnLi}>
                <Button isActive={filterStore.year === 25} onClick={() => { this.onChangeYear(25) }} text={'от 22 до 25 лет'} />
            </li>
            <li className={style.btnLi}>
                <Button isActive={filterStore.year === 35} onClick={() => { this.onChangeYear(35) }} text={'от 26 до 35 лет'} />
            </li>
        </ul>;

        const partnerYears = <ul className={style.btnsUl}>
            <li className={style.btnLi}>
                <Button isActive={_.find(filterStore.partnerYears, (year) => { return year === 17 })} onClick={() => { this.onChangePartnerYears(17) }} text={'до 17 лет'} />
            </li>
            <li className={style.btnLi}>
                <Button isActive={_.find(filterStore.partnerYears, (year) => { return year === 21 })} onClick={() => { this.onChangePartnerYears(21) }} text={'от 18 до 21 лет'} />
            </li>
            <li className={style.btnLi}>
                <Button isActive={_.find(filterStore.partnerYears, (year) => { return year === 25 })} onClick={() => { this.onChangePartnerYears(25) }} text={'от 22 до 25 лет'} />
            </li>
            <li className={style.btnLi}>
                <Button isActive={_.find(filterStore.partnerYears, (year) => { return year === 35 })} onClick={() => { this.onChangePartnerYears(35) }} text={'от 26 до 35 лет'} />
            </li>
        </ul>;

        return <div className={style.content}>
            <div className={style.row}>
                <ColFilterContent header={'Ваш Пол:'} content={sex} />
                <ColFilterContent header={'Пол собеседника:'} content={partnerSex} />
            </div>
            <div className={style.row}>
                <ColFilterContent header={'Ваш Возраст:'} content={years} />
                <ColFilterContent header={'Возраст собеседника:'} content={partnerYears} />
            </div>
            <div className={style.row}>
                <Button isActive={true} onClick={this.onPost} text={'Отправить'} />
            </div>
        </div>
        */
    }
}

export default MainFilterContent;