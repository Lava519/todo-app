import { useState } from "react";
export default function AddTask(func) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const updateTitle = (e) => {
        setTitle(e.target.value);
      }
      
      const updateDescription = (e) => {
        setDescription(e.target.value);
      }

    return (
        <div>
            <label htmlFor="title">Title</label>
            <input onChange={updateTitle} type="text" id="title"></input>
            <label htmlFor="description">Description</label>
            <input onChange={updateDescription} type="text" id="description"></input>
            <button onClick={()=>{func.createTask(title, description)}}>ADD</button>
            <button onClick={func.toggleShown}>Cancel</button>
        </div>
    )

}