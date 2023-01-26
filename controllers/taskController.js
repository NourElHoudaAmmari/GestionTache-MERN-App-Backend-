const asyncHandler = require("express-async-handler")
const Task = require("../models/Task")

const getTasks =async (req, res) => {
 try {
  const tasks = await Task.find({ userId: req.user._id })
 return res.status(200).json(tasks)
 } catch (error) {
  return res.status(500).json(error)
 }
}

const addTask = asyncHandler(async (req, res) => {
  const { title, description, start, end, color } = req.body
  //Check if champ vide
  if (!title || !description || !start || !end || !color) {
    res.status(400)
    throw new Error("Please add all fields")
  }

  // Create Tache
  const task = await Task.create({
    userId: req.user._id,
    title,
    description,
    start,
    end,
    color,
  })
  res.send("Tache  Added Successfully")
})

// const updateTache = asyncHandler(async (req, res) => {
//   const tache = await Tache.findById(req.params.id)
//   if (!tache) {
//     res.status(400)
//     throw new Error("Tache not found")
//   }
//   const updatedTache = await Tache.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//   })
//   res.status(200).json(updatedTache)
// })

const deleteTask = asyncHandler(async (req, res) => {
  const tache = await Task.findById(req.params.id)
  if (!tache) {
    res.status(400)
    throw new Error("Tache not found")
  }
  await tache.remove()
  res.status(200).json({ id: req.params.id })
})
module.exports = {
  getTasks,
  addTask,
  deleteTask,
}
