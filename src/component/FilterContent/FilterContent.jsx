import React,  { Component } from 'react';

import {observer} from "mobx-react";

import BaseMainContent from '../BaseMainContent/BaseMainContent';
import Header from '../HeaderFilterContent/HeaderFilterContent';
import Main from '../MainFilterContent/MainFilterContent';

@observer
class FilterContent extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return <React.Fragment>
            <BaseMainContent header={<Header/>} main={<Main FilterStore={this.props.FilterStore} />}/>
        </React.Fragment>
    }
}

export default FilterContent;