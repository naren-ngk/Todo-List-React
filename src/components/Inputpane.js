import Input from './Elements/Input';
import ButtonsPane from './Buttonspane';
import Panel from './Elements/Panel';
import { useState } from 'react';

function InputPane({ onCreate, editClick, isEdit, updateTask }) {
    const [term, setTerm] = useState('');
    const [date, setDate] = useState('');
    const [newTaskClicked, setNewTaskClicked] = useState(false);

    const handleChange = (event) => {
        setTerm(event.target.value);
    }

    const handleDateChange = (event) => {
        setDate(event.target.value);
    }

    const toggleInputDisplay = (event) => {
        event.preventDefault();
        setNewTaskClicked(!newTaskClicked);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setNewTaskClicked(!newTaskClicked)
        onCreate(term, date);
        setDate('');
        setTerm('');
    }

    let inputTaskDisplay = <Input placeholder="Enter new task" label="Type your task" type="text" handleChange={handleChange} value={term} />;
    let inputDueDateDisplay = <Input label="Enter Due Date" type="date" handleChange={handleDateChange} value={date} />;

    return (
        <Panel>
            {newTaskClicked && inputTaskDisplay}
            {newTaskClicked && inputDueDateDisplay}
            <form>
                <ButtonsPane onNewTaskClick={toggleInputDisplay} newTaskClicked={newTaskClicked} submitForm={handleSubmit} editClick={editClick} isEdit={isEdit} updateTask={updateTask} />
            </form>
        </Panel>
    );
}

export default InputPane;