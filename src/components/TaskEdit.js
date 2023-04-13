import { useState } from 'react';
import classNames from 'classnames';
import Input from './Elements/Input';
import Button from './Elements/Button';
import { AiFillCloseCircle } from 'react-icons/ai';

function TaskEdit({ task, onClose, updateClick }) {
    const [term, setTerm] = useState(task.task);
    const [date, setDate] = useState(task.dueDate);

    const saveButtonClasses = classNames('active:bg-green-600 hover:bg-green-500 bg-green-400 border-none h-7 self-center ml-2 text-xs');
    const closeButtonClasses = classNames('hover:cursor-pointer self-center m-3 text-3xl text-red-500');

    const handleChange = (event) => {
        setTerm(event.target.value);
    }

    const handleDateChange = (event) => {
        setDate(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        updateClick(task.id, term, date);
    }

    return (
        <form className="flex justify-between mb-2.5">
            <Input placeholder="Update your Task..." className="w-3/5 mr-2" type="text" value={term} handleChange={handleChange} />
            <Input placeholder="Update Due date..." className="w-2/5" type="date" value={date} handleChange={handleDateChange} />
            <Button onClick={handleSubmit} className={saveButtonClasses}>Save</Button>
            <AiFillCloseCircle className={closeButtonClasses} onClick={onClose} />
        </form>
    );
}

export default TaskEdit;