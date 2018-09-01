import React, { Component } from 'react';
import _ from 'underscore';
import { observer } from "mobx-react";

import Button from '../Button/Button';
import ColFilterContent from '../ColFilterContent/ColFilterContent';
import style from './style.css';

@observer
class MainFilterContent extends Component {
    constructor(props) {
        super(props);
    }

    onChangeSex = () => {
        const val = this.props.FilterStore.sex === 0 ? 1 : 0;
        this.props.FilterStore.sex = val;
    };

    onChangePartnerSex = () => {
        const val = this.props.FilterStore.partnerSex === 0 ? 1 : 0;
        this.props.FilterStore.partnerSex = val;
    };

    onChangeYear = (val) => {
        this.props.FilterStore.year = val;
    };

    onChangePartnerYears = (val) => {
        const index = _.indexOf(this.props.FilterStore.partnerYears, val);

        if (index === -1) {
            this.props.FilterStore.partnerYears.push(val);
        } else {
            this.props.FilterStore.partnerYears.splice(index, 1);
        }
    };

    onPost = () => {
        this.props.FilterStore.newDialog()
        // .then()
        // .catch();
    }

    cancel = () => {
        this.props.FilterStore.cancel()
    };

    join = () => {

    }

    render() {
        const isLoading = this.props.FilterStore.RootStore.MainStore.type === 'init';

        return (
            <div className={style.wrapper}>
                {
                    !isLoading &&
                    <div className={style.content}>
                        <div className={style.icon}>
                        </div>
                        Поиск собеседника
                            <div className={style.loadingBtns}>
                            <button onClick={this.cancel} className={`${style.btn}`}>Отмена</button>
                        </div>
                    </div>
                }
                {
                    isLoading &&
                    <div className={style.content}>
                        Общение со случайно выбранным незнакомцем.
                            <div className={style.loadingBtns}>
                            <button onClick={this.onPost} className={`${style.btn}`}>Поиск собеседника</button>
                        </div>
                    </div>
                }

            </div>
        )
        /*
        const filterStore = this.props.FilterStore;

        let sex = [];
        let partnerSex = [];

        if (filterStore.sex === 0) {
            sex = [
                <Button onClick={this.onChangeSex} isActive={true} text={'М'} />,
                <Button onClick={this.onChangeSex} text={'Ж'} />
            ];
        } else {
            sex = [<Button onClick={this.onChangeSex} text={'М'} />,
            <Button onClick={this.onChangeSex} isActive={true} text={'Ж'} />
            ]
        }

        if (filterStore.partnerSex === 0) {
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