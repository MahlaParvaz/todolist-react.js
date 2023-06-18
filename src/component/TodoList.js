import { useState } from 'react';
import TodoForm from './TodoForm';
import Todos from './Todos';

const TodoList = ({ todos, onCheck, setTodos, onUpdateTodo, onEdit }) => {
  const [edit, setEdit] = useState({
    id: null,
    text: '',
    isCompleted: false,
  });
  const editTodo = (newValue) => {
    onUpdateTodo(edit.id, newValue);
    setEdit({ id: null, text: '' });
  };
  const onDelete = (id) => {
    const index = todos.filter((todo) => todo.id !== id);
    setTodos(index);
  };

  const renderTodos = () => {
    if (todos.length === 0) return <p>add some text</p>;
    return todos.map((todo) => {
      return (
        <Todos
          todo={todo}
          key={todo.id}
          onCheck={() => onCheck(todo.id)}
          onEdit={() => setEdit(todo)}
          onDelete={() => onDelete(todo.id)}
        />
      );
    });
  };
  return (
    <div>
      {edit.id ? <TodoForm submitTodo={editTodo} edit={edit} /> : renderTodos()}
    </div>
  );
};

export default TodoList;
