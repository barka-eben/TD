import './TaskCard.css'

import { Link } from 'react-router-dom'

function TaskCard(props) {

  return (

    <Link
      to={`/task/${props.task.id}`}
      className="task-link"
    >

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

    </Link>

  )
}

export default TaskCard