const express = require("express")
const {
  getScheduleTasks,
  addScheduleTasks,
} = require("../controllers/schedule.controllers")
const router = express.Router()
const { protect } = require("../middleware/authMiddleware")

// get my tasks
router.get("/my", protect, getScheduleTasks)
router.post("/", protect, addScheduleTasks)

module.exports = router
