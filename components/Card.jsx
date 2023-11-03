export default function Card(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <a onClick={()=>{props.removeTask(props.id)}}>Remove</a>
    </div>
  )
} 

