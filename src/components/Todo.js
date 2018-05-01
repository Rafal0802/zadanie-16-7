import React from 'react';

const Todo = props => (
	<li key={props.todo.id} onClick={() => props.remove(props.todo.id)}>{props.todo.text}</li>
)

export default Todo;