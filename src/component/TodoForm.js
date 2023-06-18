import { useState } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';

const TodoForm = (props) => {
  const [input, setInput] = useState('');
  const changeHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert('type something ...');
      return;
    }
    props.submitTodo(input);
    setInput('');
  };
  return (
    <section>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="type something"
          value={input}
          onChange={changeHandler}
          className="edit"
          // style={{ display: props.edit ? 'none' : 'block' }}
        />
        <button className="btn" type="submit">
          <BsPlusCircleFill />
        </button>
      </form>
    </section>
  );
};

export default TodoForm;
