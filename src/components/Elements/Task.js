import { useState } from 'react';
import { BiPencil, BiCalendarCheck, BiTrash } from "react-icons/bi";
import classNames from 'classnames';
import Panel from './Panel';
import TaskEdit from '../TaskEdit';

let editChecker = 0;

function Task({ task, isEdit, editClick, updateClick, deleteClick }) {
    const pencilClasses = classNames('hover:cursor-pointer self-center justify-self-end text-xl');
    const trashClasses = classNames('hover:cursor-pointer self-center justify-self-end text-xl ml-2');
    const [pencilClick, setPencilClick] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const editClicked = () => {
        if (editChecker % 2 === 0) {
            isEdit();
            editChecker += 1;
        }
        setPencilClick(!pencilClick);
    }

    const closeButtonClicked = () => {
        setPencilClick(!pencilClick);
        if (editChecker % 2 === 1) {
            isEdit();
            editChecker -= 1;
        }
    }

    const handleSubmit = (id, task, date) => {
        setPencilClick(false);
        if (editChecker % 2 === 1) {
            isEdit();
            editChecker += 1;
        }
        updateClick(id, task, date);
    }

    let content = (
        <div className="flex mb-2">
            <Panel className="bg-slate-50 flex w-2/3">
                <input type="checkbox" className="mr-2" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                <p className={`w-full ${isChecked ? 'line-through' : ''}`} id="task">{task.task}</p>
                {!editClick && <BiPencil onClick={editClicked} className={pencilClasses} />}
                {!editClick && <BiTrash className={trashClasses} onClick={() => deleteClick(task.id)} />}
            </Panel>
            <div className="flex w-1/3 items-center">
                <BiCalendarCheck className="mx-2 text-xl" />
                <p>Due on {task.dueDate}</p>
            </div>
        </div>
    );

    if (pencilClick) {
        content = <TaskEdit task={task} onClose={closeButtonClicked} updateClick={handleSubmit} />
    }

    return content;
}

export default Task;