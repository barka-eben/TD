import { useState } from 'react'

import TaskCard from '../components/TaskCard'
import TaskForm from '../components/TaskForm'

function Dashboard() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      titre: "Conception de l'ontologie",
      description: "Rédiger les axiomes de base.",
      statut: "A faire"
    },

    {
      id: 2,
      titre: "Développement React",
      description: "Créer les composants principaux.",
      statut: "En cours"
    },

    {
      id: 3,
      titre: "Tests",
      description: "Tester l'application.",
      statut: "Terminé"
    }
  ])


  const onAddTask = (nouvelleTache) => {

    setTasks([...tasks, nouvelleTache])

  }


  return (

    <div>

      <h1>TaskFlow</h1>

      <TaskForm onAddTask={onAddTask} />

      {
        tasks.map(task => (

          <TaskCard
            key={task.id}
            task={task}
          />

        ))
      }

    </div>

  )
}

export default Dashboard