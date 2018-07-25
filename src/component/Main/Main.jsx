import React,  { Component } from 'react';

import {observer} from "mobx-react";

@observer
class Main extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.MainStore.connect()
    }

    render() {
        return <div>
            <h1>Main ...</h1>
        </div>;
    }
}

export default Main;