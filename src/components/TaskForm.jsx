import { useState } from 'react'

function TaskForm(props) {

  const [titre, setTitre] = useState('')
  const [description, setDescription] = useState('')
  const [statut, setStatut] = useState('A faire')


  const handleSubmit = (e) => {

    e.preventDefault()

    const nouvelleTache = {
      id: Date.now(),
      titre,
      description,
      statut
    }

    props.onAddTask(nouvelleTache)

    setTitre('')
    setDescription('')
    setStatut('A faire')

  }


  return (

    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Titre"
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
      />


      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>


      <select
        value={statut}
        onChange={(e) => setStatut(e.target.value)}
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