import React, {useState} from 'react'
import Table from 'react-bootstrap/Table';

export default function TodoPage({todos,setTodos}) {
  console.log(todos)

  function newToDo(event){

  }

  function addNewToDo(){

  }
  return (
    <>
      <h1>To Do List</h1>
          <Table responsive>
          <thead>
            <tr>
              <th>Number</th>
              <th>Task</th>
              <th>Status</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              
            </tr>
          </tbody>
        </Table>

        <label>Add New Task:
          <input type="text" name="taskName" onChange={newToDo} ></input>
        </label><br/>

        <button onClick={addNewToDo} >SUBMIT</button>
    </>
   
  )
}
