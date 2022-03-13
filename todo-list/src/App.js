import React, { useState } from 'react';
import ListItem from './components/ListItem.js'

function App() {

    const [taskInput, updateTaskInput] = useState("");
    const [toDoList, updateToDoList] = useState([]);

    const addNote = () => {
        if(taskInput!=="")
        {
            toDoList.push({ description: taskInput })
            updateToDoList(toDoList);
            localStorage.setItem('arr', toDoList)
            updateTaskInput("");
        }
        else
        {
            alert("Add description first!")
        }
    }

    const deleteTask = (index) => {
        const newList = toDoList.filter((Item, i) => i !== index);
        updateToDoList(newList);
    }

    return (
        <div className='app-background'>
            <p className="heading-text">React to do List</p>
            <div className='task-container'>
                <div>
                    <input className='text-input'placeholder='Add a task' value={taskInput} onChange={(event) => updateTaskInput(event.target.value)} />
                    <button className='add-button' onClick={addNote}>Add</button>
                </div>
                {toDoList.length ?  toDoList.map((todoObject, index) => <ListItem index={index} itemData={todoObject} deleteTask={deleteTask} />) : <p className='no-item-text'>No Task Added!</p>}
            </div>
            <p className="footer-text">Created by: Rugved Wagh</p>
        </div>
    );
}

export default App;
