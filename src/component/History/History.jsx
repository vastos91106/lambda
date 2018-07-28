import React, {Component} from 'react';

import HistoryMenu from '../HistoryMenu/HistoryMenu';

import style  from './style.css';

class History extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={style.history}>
            <HistoryMenu/>
        </div>
    }
}

export default History;