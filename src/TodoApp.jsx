import { useState } from 'react';
import { useGetTodoQuery } from './store/apis/todosApi';

// import { useGetTodosQuery } from './store/apis/todosApi';

export const TodoApp = () => {
	// const { data: todos, isLoading } = useGetTodosQuery();
	const [TodoNext, setTodoNext] = useState(1);
	const { data: todo, isLoading } = useGetTodoQuery(TodoNext);
	const NextTodo = () => {
		setTodoNext((prev) => prev + 1);
	};
	const PrevTodo = () => {
		if (TodoNext === 1) return;
		setTodoNext((prev) => prev - 1);
	};
	return (
		<>
			<h1>Todo App - RTK Query</h1>
			<hr />
			<h4>isLoading...{isLoading ? 'true' : 'false'}</h4>
			<pre>{JSON.stringify(todo, null, 2)}</pre>
			<button onClick={PrevTodo}>Prev Todo</button>
			<button onClick={NextTodo}>Next Todo</button>
			{/* <ul>
				{todos?.map((todo) => (
					<li key={todo.id}>
						<strong>{todo.completed ? '✅' : '🔴'}</strong>
						{todo.title}
					</li>
				))}
			</ul> */}
		</>
	);
};
