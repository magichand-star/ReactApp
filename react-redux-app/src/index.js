import React from 'react';
import ReactDOM from 'react-dom';
import MovieApp from './components/MovieApp';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<MovieApp />, document.getElementById('root'));
registerServiceWorker();
