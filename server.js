const express = require("express")
const dotenv = require("dotenv").config()
const { errorHandler } = require("./middleware/errorMiddleware")
const colors = require("colors")
const connectDB = require("./config/db")
const { default: mongoose } = require("mongoose")
const port = process.env.PORT || 5000
mongoose.set("strictQuery", true)
connectDB()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/task", require("./routes/task"))
app.use("/api/user", require("./routes/user"))
app.use("/api/schedule", require("./routes/schedule"))
app.use(errorHandler)

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join("frontend/build")))
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  })
}
app.listen(port, () => console.log(`Server started on port ${port}`))
