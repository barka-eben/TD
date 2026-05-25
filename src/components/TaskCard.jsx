import './TaskCard.css'

function TaskCard(props) {

  return (

    <div className="task-card">

      <h2>{props.task.titre}</h2>

      <p>{props.task.description}</p>

      <p
        className={
          props.task.statut === "A faire"
            ? "a-faire"
            : props.task.statut === "En cours"
            ? "en-cours"
            : "termine"
        }
      >
        {props.task.statut}
      </p>

    </div>

  )
}

export default TaskCard