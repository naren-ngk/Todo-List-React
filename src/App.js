import TaskList from './components/TaskList';
import InputPane from './components/Inputpane';
import Panel from './components/Elements/Panel';
import Image from './components/Elements/Image';
import { useState } from 'react';
import './index.css';

function App() {
    const [tasks, setTask] = useState([{ id: 1, task: 'Buy Eggs!', dueDate: '2020-12-12' }, { id: 2, task: 'Buy Eggs!', dueDate: '2020-12-12' }, { id: 3, task: 'Buy Eggs!', dueDate: '2020-12-12' }]);
    const [editClick, setEditClick] = useState(false);

    const handleEditClick = () => {
        setEditClick(!editClick);
    }

    const createTask = (task, dueDate) => {
        const updatedTasks = [...tasks, { id: Math.round(Math.random() * 9999), task, dueDate }];
        setTask(updatedTasks);
    }

    const editTaskById = (id, newTask, newDueDate) => {
        const updatedTasks = tasks.map((singleTask) => {
            if (singleTask.id === id) {
                return { ...singleTask, task: newTask, dueDate: newDueDate }
            }
            return singleTask;
        });
        setTask(updatedTasks);
    }

    const deleteTaskById = (id) => {
        const updatedTasks = tasks.filter((task) => {
            return task.id !== id;
        });
        setTask(updatedTasks);
    }

    return (
            <div className="w-1/2 flex-col mx-auto my-2">
                <Image alt='Banner' />
                <Panel>
                    <h2 className="my-2 text-2xl font-semibold">Your Tasks</h2>
                    <TaskList tasks={tasks} isEdit={handleEditClick} editClick={editClick} updateClick={editTaskById} deleteClick={deleteTaskById} />
                    <InputPane onCreate={createTask} editClick={editClick} isEdit={handleEditClick} />
                </Panel>
            </div>
    );
}

export default App;