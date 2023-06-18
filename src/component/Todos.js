import '../App.css';
// import { BsFillCheckCircleFill } from 'react-icons/bs';
import { FaTrashAlt, FaCheckCircle, FaEdit } from 'react-icons/fa';
const Todos = ({ todo, onCheck, onDelete, onEdit }) => {
  return (
    <div className={`todo ${onEdit ? 'edit' : ''}`}>
      <div
        onClick={onCheck}
        className={`todoText ${todo.isCompleted ? 'completed' : ''}`}
      >
        {todo.text}
      </div>
      <div className="buttons">
        <button
          className="btn"
          onClick={onCheck}
          style={{
            color: todo.isCompleted ? '' : '#ccc',
          }}
        >
          <FaCheckCircle />
        </button>
        <button className="btn" onClick={onEdit}>
          <FaEdit />
        </button>
        <button className="btn" onClick={onDelete}>
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default Todos;
