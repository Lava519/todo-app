import { useState, useEffect } from 'react'
import Card from '../components/Card.jsx';
import AddTask from '../components/AddTask.jsx';
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [shown, setShown] = useState(false);

  function toggleShown() {
    if(shown)
      return setShown(false)
    return setShown(true);
  }

  function createTask(title, description) {
    if(title != "") {
      let t = [...tasks, {title: title, description: description, done: false}];
      setTasks(t);
    }
    toggleShown();
  }

  function removeTask(key) {
    setTasks(tasks.slice(0, key).concat(tasks.slice(key+1, tasks.length)))
  }

  return (
    <>
    <h1>TODO APP</h1>
    <div>
    {tasks.map(
      (task, i) => {
        return (
          <Card removeTask={removeTask} id={i} key={i} title={task.title} description={task.description} />
        )
      }
    )}
    </div>
    <button onClick={toggleShown}>ADD</button>
    {shown && <AddTask toggleShown={toggleShown} createTask={createTask} />}
    </>
  )
}

export default App
