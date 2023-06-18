import '../App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { useEffect, useState } from 'react';

const TodoApp = () => {
  const initialState = JSON.parse(localStorage.getItem('todo')) || [];
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);
  const checkHandler = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };
  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todos));
  }, [todos]);
  return (
    <section className="container">
      <TodoForm
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
      <TodoList
        todos={todos}
        onCheck={checkHandler}
        setTodos={setTodos}
        setEditTodo={setEditTodo}
      />
    </section>
  );
};

export default TodoApp;
