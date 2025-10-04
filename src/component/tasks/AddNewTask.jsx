import React, { useState } from 'react'

export default function AddNewTask() {

    const [newTask, setNewTask] = useState("")

    function addNewToDo (){

    }



  return (
    <>
        <label>Add New Task:
        <input type="text" name="taskName" onChange={(event)=>(setNewTask(event.target.value))} ></input>
        </label><br/>

        <button onClick={addNewToDo} >SUBMIT</button>

    </>
   
  )
}
