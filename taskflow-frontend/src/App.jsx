import { Routes, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import TaskDetail from './pages/TaskDetail'

function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Dashboard />}
      />

      <Route
        path="/task/:id"
        element={<TaskDetail />}
      />

    </Routes>

  )
}

export default App