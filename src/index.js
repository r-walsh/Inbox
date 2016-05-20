import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize-css';

import store from './store';

import App from './components/App';

document.addEventListener( `DOMContentLoaded`, () => {
	const reactNode = document.getElementById( `react-node` );

	if ( reactNode ) {
		ReactDOM.render(
			<Provider store={ store }>
				<App />
			</Provider>
		, reactNode );
	}
} );
