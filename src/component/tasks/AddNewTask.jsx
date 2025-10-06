import React, { useState } from 'react'

export default function AddNewTask({todos, setTodos}) {

    const [newTask, setNewTask] = useState({
        id: "",
        task: "",
        status: "Not Completed",
        completed: ""
    })

    function handleChange (event) {
        const{name, value } = event.target 
        setNewTask ({...newTask, [name]:value})
    }

    function addNewTask (){
        console.log(newTask)
        setTodos([...todos, newTask])
    }



  return (
    <>
        <label>Add New Task:
        <input type="text" name="task" onChange={handleChange} ></input>
        </label><br/>

        <button onClick={addNewTask} >ADD</button>

    </>
   
  )
}
