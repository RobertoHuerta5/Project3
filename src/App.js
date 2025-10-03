import './App.css';
import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './component/layout/Layout';
import HomePage from './component/pages/HomePage';
import TodoPage from './component/pages/TodoPage';
import ContactPage from './component/pages/ContactPage';

function App() {
  const [todos, setTodos] = useState ([
    {id: 1, text: 'Learn React', completed: 'Completed' },
    {id: 2, text: 'Build a Todo', completed: 'Completed' },
    {id: 3, text: 'Submit Assignment', completed: 'Completed' }
  ]);

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="todo" element={<TodoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
     </>
  ); 
}

export default App;
