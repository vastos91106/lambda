import React,  { Component } from 'react';

import {observer} from "mobx-react";


@observer
class SearchPartner extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return <React.Fragment>
           <span>find</span>
        </React.Fragment>
    }
}

export default SearchPartner;