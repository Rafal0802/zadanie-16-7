import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';

const TodoList = props => (
	<ul>
		{props.data.map(todo => <Todo todo={todo} remove={props.remove} />)}
	</ul>
);

export default TodoList;