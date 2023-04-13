import Task from './Elements/Task';

function TaskList({ tasks, isEdit, editClick, updateClick, deleteClick }) {
    const renderedTasks = tasks.map((task) => {
        return <Task task={task} isEdit={isEdit} editClick={editClick} updateClick={updateClick} deleteClick={deleteClick} key={task.id} />
    });

    return (
        <div>{renderedTasks}</div>
    );
}

export default TaskList;