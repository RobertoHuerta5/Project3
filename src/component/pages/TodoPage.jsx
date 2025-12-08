import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import AddNewTask from '../tasks/AddNewTask';

export default function TodoPage({todos,setTodos}) {

 
  function handleDelete (event, todoID){
    const result = todos.filter(todo=>todo.id!== todoID)
    setTodos (result)  
  }

  function handleUpdate (event, todoID){
    const updatedToDos = todos.map(todo => {
      if (todo.id === todoID){
        return {
          ...todo,
          status: todo.status === 'Not Completed' ? 'Completed' : 'Not Completed'
        };
      }
      return todo;
    })
    setTodos(updatedToDos);
  }

  return (
    <>
      <div className="todoPage">
        <h1 className="mainTitle">To Do List</h1>
          <div className="todoTable">
            <AddNewTask todos={todos} setTodos= {setTodos}/>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Number</th>
                    <th>Task</th>
                    <th>Status</th>
                    <th>Action</th>
                    <th>Update</th>
                  </tr>
                </thead>
                <tbody>

                    {todos.map((todo, index)=>(
                    <tr key= {todo.id}>
                      <td>{index+1}</td>
                      <td>{todo.task}</td>
                      <td>{todo.status}</td>
                      <td><Button variant="danger" name= "buttonDelete" onClick={(event)=>handleDelete(event, todo.id)}>Delete</Button></td>
                      <td><Button variant="success" name= "buttonUpdate" onClick={(event)=>handleUpdate(event, todo.id)}>Complete</Button></td>
                      
                    </tr>
                    ))}

                </tbody>
              </Table>
          </div>   
       </div>  
    </>
   
  )
}
