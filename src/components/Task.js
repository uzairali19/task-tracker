import PropType from 'prop-types';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => (
  <div
    className={`task ${task.reminder ? 'reminder' : ''}`}
    onDoubleClick={() => {
      onToggle(task.id);
    }}
  >
    <h3>
      {task.text}
      <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} />
    </h3>
  </div>
);

Task.propType = {
  task: PropType.string,
};

export default Task;
