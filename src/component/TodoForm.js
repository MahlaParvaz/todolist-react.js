import { useEffect } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import Header from './Header';

const TodoForm = ({
  input,
  setInput,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
}) => {
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.text);
    } else {
      setInput('');
    }
  }, [setInput, editTodo]);
  const updateTodo = (id, text, isCompleted) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { id, text, isCompleted } : todo
    );
    setTodos(newTodo);
    setEditTodo('');
  };

  const changeInputHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    if (!input) {
      alert('type something ...');
      return;
    }
    setTodos([...todos, newTodo]);
    setInput('');
    if (!editTodo) {
      setTodos([...todos, newTodo]);
      setInput('');
    } else {
      updateTodo(editTodo.id, input, editTodo.isCompleted);
    }
  };
  return (
    <section className='header'>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="type something"
          value={input}
          onChange={changeInputHandler}
        />
        <button className="btn" type="submit">
          <BsPlusCircleFill />
        </button>
      </form>
      <Header />
    </section>
  );
};

export default TodoForm;
