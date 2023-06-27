import '../App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { useEffect, useState } from 'react';
import Header from './Header';
import NavBar from './NavBar';

const TodoApp = () => {
  const initialState = JSON.parse(localStorage.getItem('todo')) || [];
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedOption, setSelectedOption] = useState('All');

  const checkHandler = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };
  const filterTodos = (status) => {
    switch (status) {
      case 'Completed':
        setFilteredTodos(todos.filter((t) => t.isCompleted));
        break;
      case 'Uncompleted':
        setFilteredTodos(todos.filter((t) => !t.isCompleted));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };
  const selectFilterHandler = (e) => {
    setSelectedOption(e);
    filterTodos(e.value);
  };
  useEffect(() => {
    filterTodos(selectedOption.value);
    localStorage.setItem('todo', JSON.stringify(todos));
  }, [todos, selectedOption]);
  return (
    <div className="app">
      <nav className="navbar">
        <NavBar />
      </nav>
      <div className="container">
        <div className="header">
          <TodoForm
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
          <Header
            unCompletedTodos={todos.filter((t) => !t.isCompleted).length}
            selectedOption={selectedOption}
            onChange={selectFilterHandler}
          />
        </div>

        <TodoList
          todos={filteredTodos}
          onCheck={checkHandler}
          setTodos={setTodos}
          setEditTodo={setEditTodo}
        />
      </div>
    </div>
  );
};

export default TodoApp;
