import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import rootReducers from './redux/reducers';

import App from './App';
import 'rc-slider/assets/index.css';
import './scss/style.css';
import registerServiceWorker from './registerServiceWorker';

// Router
import { BrowserRouter } from 'react-router-dom';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducers, {}, composeEnhancers());

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
	, document.getElementById('root')
);

registerServiceWorker();
