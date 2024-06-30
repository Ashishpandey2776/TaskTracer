import Mylist from "./mylist";
import { useEffect, useState } from "react";
import './App.css';
import axios from "axios";

function Home() {
  const [todos, setTodos] = useState([]);
  console.log(todos);

  useEffect(() => {
    axios.get("http://localhost:9090/get")
      .then(result => setTodos(result.data))
      .catch(err => console.log(err));
  }, []);

  function EraseData(user_id) {
    console.log("User ID to delete:", user_id); // Debug log
    axios.delete(`http://localhost:9090/delete/${user_id}`)
      .then(result => {
        console.log(result);
        // Update state to remove the deleted todo
        setTodos(todos.filter(todo => todo.id !== user_id));
      })
      .catch(err => console.log(err));
  }

  return (
    <div id="home">
      <h1>TO DO LIST</h1>
      <Mylist />
      {todos.length === 0 ? (
        <div><p>No record</p></div>
      ) : (
        todos.map(todo => (
          <div id="task" key={todo._id}>
            {todo.task}
            <button type="button" id="delete" onClick={() => EraseData(todo._id)}>delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
