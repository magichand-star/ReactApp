import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import MovieApp from './components/MovieApp';
import Footer from './components/Footer';

import { Provider } from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
    <div>
    <Header />
	<MovieApp />
	</div>
	</Provider>, document.getElementById('root'));
registerServiceWorker();
