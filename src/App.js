import './App.css';

function App() {
  const [todos, setTodos] = useState ([
    {id: 1, text: 'Learn React', completed: 'Completed' },
    {id: 2, text: 'Build a Todo', completed: 'Completed' },
    {id: 3, text: 'Submit Assignment', completed: 'Completed' }
  ]);
  return (
    <h1>Task Management Project</h1>
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="student" element={<StudentPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
