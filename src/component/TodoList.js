import Todos from './Todos';
import '../App.css';

const TodoList = ({ todos, onCheck, setTodos, setEditTodo }) => {
  const editHandler = ({ id }) => {
    const index = todos.find((todo) => todo.id === id);
    setEditTodo(index);
  };

  const onDelete = (id) => {
    const index = todos.filter((todo) => todo.id !== id);
    setTodos(index);
  };

  const renderTodos = () => {
    if (todos.length === 0) return <p className='addText'>add some text</p>;
    return todos.map((todo) => {
      return (
        <Todos
          todo={todo}
          key={todo.id}
          onCheck={() => onCheck(todo.id)}
          onEdit={() => editHandler(todo)}
          onDelete={() => onDelete(todo.id)}
        />
      );
    });
  };
  return <div>{renderTodos()}</div>;
};

export default TodoList;
