import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { observer } from "mobx-react";

import History from '../History/History';
import FilterContent from '../FilterContent/FilterContent';

@observer
class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.MainStore.connect()
    }

    render() {
        const filterStore = this.props.MainStore.RootStore.FilterStore;

        return <React.Fragment>
            <History />
           <FilterContent FilterStore={filterStore}/>
        </React.Fragment>;
    }
}


const SubView = ({ match }) => (
    <div>
      <h3>Section: {match.params.sectionName}</h3>
    </div>
  );

export default Main;