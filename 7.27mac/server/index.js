require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use('/api', require("./routes/authRouter"))
app.use('/api', require("./routes/postRouter"))
mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// app.get('/set-cookies',(req,res) => {
//   res.cookie("isemaplgaggagae",true,{maxage:1000 *60 *60 * 24, httpOnly:true});
// res.send("you got te h cokkiet")
// })
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log('Server is running on port', port)
})