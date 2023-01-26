const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    title: {
      type: String,
      required: [true, "Please add an title"],
    },
    description: {
      type: String,
      required: [true, "Please add an description"],
    },
    start: {
      type: Date,
      required: [true, "Please add an start Date"],
    },
    end: {
      type: Date,
      required: [true, "Please add a end Date"],
    },
    color: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
)
module.exports = mongoose.model("Task", userSchema)
