import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
	// nombre que va a tener la api
	reducerPath: 'todosApi',
	// base url de la api
	/* Configuración de la URL base para la API. */
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com/',
	}),
	// endpoints de la api
	// diferentes funciones que se van a ejecutar para obtener los datos
	endpoints: (builder) => ({
		getTodos: builder.query({
			// el query sirve para obtener los datos
			query: () => `todos`,
		}),
		// no se puede usar el mismo nombre de endpoint
		getTodo: builder.query({
			// el query sirve para obtener los datos
			query: (todoId) => `todos/${todoId}`,
		}),
	}),
});

// exportamos los hooks para poder usarlos en los componentes
// crea custom hooks para usar en los componentes
export const { useGetTodosQuery, useGetTodoQuery } = todosApi;
