import React, { Component } from 'react';

import { observer } from "mobx-react";

import BaseMainContent from '../BaseMainContent/BaseMainContent';
import Header from '../HeaderFilterContent/HeaderFilterContent';
import Main from '../Messages/Messages';

@observer
class FilterContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <React.Fragment>
            <BaseMainContent  header={<Header/>} main={<Main {...this.props.MessageStore}/>}/>
        </React.Fragment>;
    }
}

export default FilterContent;