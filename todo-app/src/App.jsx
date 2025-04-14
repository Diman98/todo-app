import { useState } from 'react'
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>My ToDo List</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
      {/* <pre>{JSON.stringify(todos, null, 2)}</pre> */}
    </div>
  );
}

export default App;
