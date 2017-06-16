import React from 'react';
import ReactDOM from 'react-dom';
import Board from './BoardComponent';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Board count={10}></Board>, document.getElementById('root'));
registerServiceWorker();
