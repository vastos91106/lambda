import React from 'react';
import { render } from 'react-dom';
import App from './src/App';

const data = {
    api:'http://localhost:5000'
};

render(<App data={data} />, document.getElementById('app'));