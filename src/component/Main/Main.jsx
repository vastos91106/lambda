import React,  { Component } from 'react';

import {observer} from "mobx-react";

import History from  '../History/History';
import FilterContent from '../FilterContent/FilterContent';

@observer
class Main extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.MainStore.connect()
    }

    render() {
        return <React.Fragment>
            <History/>
            <FilterContent/>
        </React.Fragment>;
    }
}

export default Main;