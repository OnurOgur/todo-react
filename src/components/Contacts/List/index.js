import { useState } from 'react';

function List() {

    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);
    const handleChange = (e) => {
        setTask(e.target.value);
    } ;

    const AddTask = () => {
        if(task !== ""){
            const taskDetails = {
                id: Math.floor(Math.random()*1000),
                value: task,
                isCompleted: false,
            }
            setTaskList([...taskList, taskDetails]);
        }
    };

    const deleteTask = (e, id) => {
        e.preventDefault();
        setTaskList(taskList.filter((t) => t.id !== id));
      };
    
      
    return (
        <div className="List">
            <input name="name" onChange={(e) => handleChange(e)} placeholder="What needs to be done?" />
            <button className="btn" onClick={AddTask}>Add</button>
            <hr />
            {taskList !== [] ? (
            <ul>
            {taskList.map((t) => (
                <li className={t.isCompleted ? "crossText" : "listitem"}>
                    <div className="all">
                    {t.value}
                    <button className="delete" onClick={(e) => deleteTask(e, t.id)}>
                        Delete
                    </button>
                    </div>
                    <hr />
                </li>
                
            ))}
            </ul>
        ) : null}
        </div>
    )
}

export default List
