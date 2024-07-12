import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

function Todo({ todos, completeTodo, removeTodo, editTodo }) {
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        <div>{todo.text}</div>
        <div className="todo-date">{todo.date}</div>
      </div>
      <div className='icons'>
        <FontAwesomeIcon icon={faEdit} onClick={() => editTodo(todo)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => removeTodo(todo.id)} />
      </div>
    </div>
  ));
}

export default Todo;
