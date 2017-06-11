import React from 'react';
import ReactDOM from 'react-dom';
import Note from './Note';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Note>Hello world</Note>, document.getElementById('root'));
registerServiceWorker();
