import { useState } from 'react'

function TaskForm({ onAddTask }) {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('A faire')

  const handleSubmit = (e) => {

    e.preventDefault()

    const nouvelleTache = {
      title,
      description,
      status
    }

    onAddTask(nouvelleTache)

    setTitle('')
    setDescription('')
    setStatus('A faire')

  }

  return (

    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>A faire</option>
        <option>En cours</option>
        <option>Terminé</option>
      </select>

      <button type="submit">
        Ajouter
      </button>

    </form>

  )

}

export default TaskForm