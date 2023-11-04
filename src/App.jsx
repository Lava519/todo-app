import { useState, useEffect } from 'react'
import Card from './components/Card.jsx';
import AddTask from './components/AddTask.jsx';
import Overlay from './components/Overlay.jsx';
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
    <div className="app-container">
    <h1 className="app-name">TODO APP</h1>
    <div className="cards-container">
    {tasks.map(
      (task, i) => {
        return (
          <Card removeTask={removeTask} id={i} key={i} title={task.title} description={task.description} />
        )
      }
    )}
    </div>
    <button className="add-button" onClick={toggleShown}>+</button>
    {shown && <Overlay/>}
    {shown && <AddTask toggleShown={toggleShown} createTask={createTask} />}
    </div>
  )
}

export default App
