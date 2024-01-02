import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import GitHubStats from './GitHubStats';




function App() {
  let [inpVal, setTask] = useState("");
  let [todoArr, setTodo] = useState([]);

  function addTodo(e) {
    e.preventDefault();
    setTodo([inpVal, ...todoArr]);
    setTask("");
  }
  function remove(i) {
    todoArr.splice(i, 1);
    setTodo([...todoArr]);
  }
  function edit(i) {
    const newVal = prompt("Enter new value");
    todoArr[i] = newVal;
    setTodo([...todoArr]);
  }

  return (
    <>
      <form onSubmit={addTodo}>
        <input
          value={inpVal}
          onChange={(e) => setTask(e.target.value)}
          type="text"
        />
        <button type="submit">Add task</button>
      </form>
      {todoArr.map((item, index) => {
        return (
          <div key={index}>
            {item} <button onClick={() => remove(index)}>delete</button>
            <button onClick={() => edit(index)}>edit</button>
          </div>
        );
      })}
 <div>
      <h1>GitHub Stats App</h1>
      <GitHubStats username={"githubUsername"} />
    </div>
    </>
  );
}

export default App;
