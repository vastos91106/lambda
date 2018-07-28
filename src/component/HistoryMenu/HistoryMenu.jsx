import React, {Component} from 'react';

import style  from './style.css';

class HistoryMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={style.menu}>
               <h2 className={style.title}>История</h2>
                <button className={style.btn}>Меню</button>
            </div>
    }
}

export default HistoryMenu;