import NavBar from './NavBar';
import '../App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const checkHandler = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const addTodoHandler = (input) => {
    // console.log(input);
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id, newValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };
  return (
    <section className="container">
      <NavBar />
      <TodoForm submitTodo={addTodoHandler} />
      <TodoList
        todos={todos}
        onCheck={checkHandler}
        setTodos={setTodos}
        onUpdateTodo={updateTodo}
      />
    </section>
  );
};

export default TodoApp;
