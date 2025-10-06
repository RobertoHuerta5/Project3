import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import AddNewTask from '../tasks/AddNewTask';

export default function TodoPage({todos,setTodos}) {

 
  function handleDelete (event, todoID){
    const result = todos.filter(todo=>todo.id!== todoID)
    setTodos (result)  
  }

  return (
    <>
      <h1>To Do List</h1>
      <AddNewTask todos={todos} setTodos= {setTodos}/>
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
              <tr key= {index}>
                <td>{index+1}</td>
                <td>{todo.task}</td>
                <td>{todo.status}</td>
                <td><Button variant="danger" name= "buttonDelete" onClick={(event)=>handleDelete(event, todo.id)}>Delete</Button></td>
                
              </tr>
              ))}

          </tbody>
        </Table>

       
    </>
   
  )
}
