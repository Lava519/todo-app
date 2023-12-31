import { useState } from "react";
import "../styles/AddTask.css";
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
        <div className="add-menu">
            <label className="title-label label" htmlFor="title">Title</label>
            <input onChange={updateTitle} className="input-field" type="text" id="title"></input>
            <label className="description-label label" htmlFor="description">Description</label>
            <textarea onChange={updateDescription} className="input-field" rows="3" id="description"></textarea>
            <div className="buttons">
            <button className="menu-cancel-button menu-button" onClick={func.toggleShown}>-</button>
            <button className="menu-add-button menu-button" onClick={()=>{func.createTask(title, description)}}>+</button>
            </div>
        </div>
    )

}