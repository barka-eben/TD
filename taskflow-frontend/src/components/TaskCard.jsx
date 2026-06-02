import './TaskCard.css'
import { Link } from 'react-router-dom'

function TaskCard({
  task,
  onDelete,
  onUpdateStatus
}) {

  return (

    <div className="task-card">

      <Link
        to={`/task/${task._id}`}
        className="task-link"
      >

        <h2>{task.title}</h2>

        <p>{task.description}</p>

      </Link>

      <select
        value={task.status}
        onChange={(e) =>
          onUpdateStatus(
            task._id,
            e.target.value
          )
        }
      >

        <option>A faire</option>
        <option>En cours</option>
        <option>Terminé</option>

      </select>

      <button
        onClick={() => onDelete(task._id)}
      >
        Supprimer
      </button>

    </div>

  )

}

export default TaskCard