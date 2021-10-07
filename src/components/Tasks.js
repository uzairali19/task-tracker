import PropTypes from "prop-types";
import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => (
  <>
    {tasks.map((task) => (
      <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
    ))}
  </>
);

Tasks.propType = {
  tasks: PropTypes.any,
};

export default Tasks;
