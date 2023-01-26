const express = require("express")
const router = express.Router()
const {
  getTasks,
  addTask,
  deleteTask,
} = require("../controllers/taskController")
const { protect } = require("../middleware/authMiddleware")
const Task = require("../models/Task")

// get my tasks
router.get("/my", protect, async (req, res) => {
  try {
    console.log(req.user)
   const tasks = await Task.find({ userId: req.user._id })
   console.log(tasks)

  return res.status(200).json(tasks)
  } catch (error) {
   return res.status(500).json(error)
  }
 })
router.post("/", protect, addTask)
router.delete("/:id", protect, deleteTask)

module.exports = router
