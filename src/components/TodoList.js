import React from 'react';
import style from './TodoList.css';

const TodoList = props => (
	<ul className={style.TodoList}>
		{props.data.map(todo => (
			<li key={todo.id} onClick={() => props.remove(todo.id)}>{todo.text}</li>)
		)}
	</ul>
);

export default TodoList;