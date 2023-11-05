import "../styles/Card.css"

export default function Card(props) {
  return (
    <div className="card">
      <h2 className="card-title" >{props.title}</h2>
      <p className="card-description">{props.description}</p>
      <a className="card-remove" onClick={()=>{props.removeTask(props.id)}}>Remove</a>
    </div>
  )
} 

