import axios from 'axios';

export const pokemonApi = axios.create({
	// baseUrl es la url base de la api
	baseURL: 'https://pokeapi.co/api/v2',
});
