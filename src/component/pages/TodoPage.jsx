import React, {useState} from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

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
              <th>Action</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>

              {todos.map((todo, index)=>(
              <tr>
                <td>{index+1}</td>
                <td>{todo.task}</td>
                <td>{todo.status}</td>
                <td><Button variant="danger">Danger</Button></td>
                
              </tr>
              ))}

          </tbody>
        </Table>

        <label>Add New Task:
          <input type="text" name="taskName" onChange={newToDo} ></input>
        </label><br/>

        <button onClick={addNewToDo} >SUBMIT</button>
    </>
   
  )
}
