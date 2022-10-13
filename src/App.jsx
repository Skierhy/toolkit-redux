import { useSelector, useDispatch } from 'react-redux';
import {
	increment,
	decrement,
	incrementBy,
} from './store/slices/counter/counterSlice';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
	const { counter } = useSelector((state) => state.counter);
	const dispatch = useDispatch();
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={reactLogo} className='logo' alt='logo' />
				<p>count is: {counter}</p>
				<p>
					<button type='button' onClick={() => dispatch(increment())}>
						increment
					</button>
					<button type='button' onClick={() => dispatch(decrement())}>
						decrement
					</button>
					<button
						type='button'
						onClick={() => dispatch(incrementBy(2))}
					>
						incrementBy: 2
					</button>
				</p>
			</header>
		</div>
	);
}

export default App;
