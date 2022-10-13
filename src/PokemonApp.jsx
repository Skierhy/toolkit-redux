import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon/thunks';

export const PokemonApp = () => {
	const dispatch = useDispatch();
	const { isLoading, pokemon, page } = useSelector((state) => state.pokemon);
	useEffect(() => {
		dispatch(getPokemons(1));
	}, []);

	return (
		<>
			<h1>Pokemon App</h1>
			<hr />
			<span>Loading:{isLoading ? 'true' : 'false'}</span>
			<ul>
				{pokemon.map((poke) => (
					<li key={poke.name}>{poke.name}</li>
				))}
			</ul>

			<button
				disabled={isLoading}
				onClick={() => dispatch(getPokemons(page))}
			>
				next
			</button>
		</>
	);
};
