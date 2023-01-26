const asyncHandler = require("express-async-handler")
const Schedule = require("../models/Schedule")
const User = require("../models/User")

const getScheduleTasks = asyncHandler(async (req, res) => {
  const tasks = await Schedule.find({ userId: req.user._id })
  res.status(200).json(tasks)
})

const addScheduleTasks = asyncHandler(async (req, res) => {
  const { title, description, start, end, color } = req.body
  //Check if champ vide
  if (!title || !description || !start || !end || !color) {
    res.status(400)
    throw new Error("Please add all fields")
  }

  // Create Tache
  const task = await Schedule.create({
    userId: req.user._id,
    title,
    description,
    start,
    end,
    color,
  })
  await User.updateOne({ _id: req.user._id }, { $push: { schedule: task._id } })
  res.send("Tache  Added Successfully")
})
module.exports = {
  getScheduleTasks,
  addScheduleTasks,
}
