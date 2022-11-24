import express from 'express'
import mongoose from "mongoose"
import morgan from "morgan"
import cors from "cors"
import userRouter from "./routes/userRoutes.js";




const port = 5000;
const app = express();


app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())


app.use('/users', userRouter)

app.get('/', (req, res) => {
    res.send("hello world")
})


mongoose.connect('mongodb://localhost:27017/react').then(() => {
    app.listen(port, () => {
        console.log(`server running on port ${port}`);
    })
}).catch((error) => {
    console.log(error)
})


