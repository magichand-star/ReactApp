import React from 'react';
import ReactDOM from 'react-dom';
import MovieApp from './components/MovieApp';
import { Provider } from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
	<MovieApp />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
