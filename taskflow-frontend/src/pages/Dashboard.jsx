import { useEffect, useState } from 'react'
import api from '../services/api'

import TaskCard from '../components/TaskCard'
import TaskForm from '../components/TaskForm'

function Dashboard() {

  const [tasks, setTasks] = useState([])

  // Charger les tâches au démarrage
  useEffect(() => {

    const fetchTasks = async () => {

      try {

        const response = await api.get('/tasks')

        setTasks(response.data)

      } catch (error) {

        console.error(error)

      }

    }

    fetchTasks()

  }, [])

  // Ajouter une tâche
  const onAddTask = async (taskData) => {

    try {

      const response = await api.post('/tasks', taskData)

      setTasks([...tasks, response.data])

    } catch (error) {

      console.error(error)

    }

  }

  // Modifier le statut
  const updateTaskStatus = async (id, status) => {

    try {

      const response = await api.put(`/tasks/${id}`, {
        status
      })

      setTasks(
        tasks.map(task =>
          task._id === id ? response.data : task
        )
      )

    } catch (error) {

      console.error(error)

    }

  }

  // Supprimer une tâche
  const deleteTask = async (id) => {

    try {

      await api.delete(`/tasks/${id}`)

      setTasks(
        tasks.filter(task => task._id !== id)
      )

    } catch (error) {

      console.error(error)

    }

  }

  return (

    <div>

      <h1>TaskFlow</h1>

      <TaskForm onAddTask={onAddTask} />

      {
        tasks.length === 0 ? (

          <p>Aucune tâche disponible.</p>

        ) : (

          tasks.map(task => (

            <TaskCard
              key={task._id}
              task={task}
              onDelete={deleteTask}
              onUpdateStatus={updateTaskStatus}
            />

          ))

        )
      }

    </div>

  )

}

export default Dashboard