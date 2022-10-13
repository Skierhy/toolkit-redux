import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { TodoApp } from './TodoApp';
// import { PokemonApp } from './PokemonApp';
// import App from './App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			{/* <App /> */}
			{/* <PokemonApp /> */}
			<TodoApp />
		</Provider>
	</React.StrictMode>
);
