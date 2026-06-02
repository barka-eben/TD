const Task = require('../models/Task')


// GET /api/tasks
const getAllTasks = async (req, res) => {

  try {

    const tasks = await Task.find()

    res.status(200).json(tasks)

  } catch (error) {

    res.status(500).json({
      message: error.message
    })

  }

}


// POST /api/tasks
const createTask = async (req, res) => {

  try {

    const task = new Task(req.body)

    const savedTask = await task.save()

    res.status(201).json(savedTask)

  } catch (error) {

    res.status(400).json({
      message: error.message
    })

  }

}


// PUT /api/tasks/:id
const updateTaskStatus = async (req, res) => {

  try {

    const updatedTask = await Task.findByIdAndUpdate(

      req.params.id,

      {
        status: req.body.status
      },

      {
        new: true
      }

    )

    res.status(200).json(updatedTask)

  } catch (error) {

    res.status(400).json({
      message: error.message
    })

  }

}


// DELETE /api/tasks/:id
const deleteTask = async (req, res) => {

  try {

    await Task.findByIdAndDelete(req.params.id)

    res.status(200).json({
      message: 'Tâche supprimée'
    })

  } catch (error) {

    res.status(500).json({
      message: error.message
    })

  }

}


module.exports = {
  getAllTasks,
  createTask,
  updateTaskStatus,
  deleteTask
}