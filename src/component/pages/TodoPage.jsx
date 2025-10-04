import React, {useState} from 'react'

export default function TodoPage({todo,setTodos}) {

  function newToDo(event){

  }

  function addNewToDo(){

  }
  return (
    <>
      <h1>Add New Task</h1>

        <label>Taks To Do:
          <input type="text" name="taskName" onChange={newToDo} ></input>
        </label><br/>

        <button onClick={addNewToDo} >SUBMIT</button>
    </>
   
  )
}
