import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    date: ''
  });

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
    setEdit({
      id: null,
      value: '',
      date: ''
    });
  };

  const editTodo = (todo) => {
    setEdit({ id: todo.id, value: todo.text, date: todo.date });
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removedArr);
  };

  return (
    <div>
      <h1>What's on your mind?</h1>
      {edit.id ? (
        <TodoForm edit={edit} onSubmit={updateTodo} />
      ) : (
        <TodoForm onSubmit={addTodo} />
      )}
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        editTodo={editTodo}
      />
    </div>
  );
};

export default TodoList;
