import classNames from 'classnames';
import Button from './Elements/Button';

function Buttonspane({ onNewTaskClick, newTaskClicked, submitForm, editClick }) {
    const buttonsPaneClasses = classNames('p-3 w-full flex justify-center')
    const buttonClasses = classNames('mr-3 block');

    return (
        <div className={buttonsPaneClasses}>
            {!newTaskClicked && <Button newTask className={buttonClasses} onClick={onNewTaskClick}>New Task</Button>}
            {newTaskClicked && <Button newTask className={buttonClasses} onClick={submitForm}>Create Task</Button>}
            {newTaskClicked && <Button deleteTask className={buttonClasses} onClick={onNewTaskClick}>Close</Button>}
        </div>
    );
}

export default Buttonspane;