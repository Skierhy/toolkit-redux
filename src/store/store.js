import { configureStore } from '@reduxjs/toolkit';
import { todosApi } from './apis/todosApi';
import { counterSlice } from './slices/counter/counterSlice';
import { pokemonSlice } from './slices/pokemon/pokemonSlice';

export const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
		pokemon: pokemonSlice.reducer,
		// Agregamos la api al store
		[todosApi.reducerPath]: todosApi.reducer,
	},
	// Agregamos el middleware de la api al store\
	// un middleware es una función que se ejecuta antes de que llegue al reducer
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(todosApi.middleware),
});
