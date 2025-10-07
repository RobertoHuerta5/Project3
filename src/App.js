import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import HomePage from './component/pages/HomePage';
import TodoPage from './component/pages/TodoPage';
import ContactPage from './component/pages/ContactPage';
import Header from './component/layout/Header';
import Footer from './component/layout/Footer';

function App() {
  const [todos, setTodos] = useState ([
    {id: 1, task: 'Learn React', status: 'Not completed', completed: 'Completed'},
    {id: 2, task: 'Build a Todo', status: 'Not completed', completed: 'Completed'},
    {id: 3, task: 'Submit Assignment',status: 'Not completed', completed: 'Completed'}
  ]);

  return (
    <>
      <Header />
     <BrowserRouter>
        <Routes>
          <Route >
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/todo" element={<TodoPage todos={todos} setTodos={setTodos} />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  ); 
}

export default App;
