import { useParams } from 'react-router-dom'

function TaskDetail() {

  const { id } = useParams()

  return (

    <div>

      <h1>Détail de la tâche</h1>

      <p>ID : {id}</p>

    </div>

  )
}

export default TaskDetail