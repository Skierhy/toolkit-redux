import { pokemonApi } from '../../../api/pokemonApi';
import { setPokemon, startLoadingPokemon } from './pokemonSlice';

export const getPokemons = (page = 0) => {
	// getState es una función que devuelve el estado actual de la store
	return async (dispatch, getState) => {
		dispatch(startLoadingPokemon());
		// todo: realizar petición http
		// const repuesta = await fetch(
		// 	`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
		// );
		// const data = await repuesta.json();

		const { data } = await pokemonApi.get(
			`/pokemon?limit=10&offset=${page * 10}`
		);
		dispatch(setPokemon({ page: page + 1, pokemon: data.results }));
	};
};
