import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from "cors"
import connectDb from './config/db.js'
import authRoutes from './routes/authRoutes.js'
dotenv.config()
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

let PORT = process.env.PORT || 6000

let app = express()

app.use(express.json())
app.use(cookieParser())

app.use(cors({
  origin: [
    "https://onecart1-frontend.onrender.com",
    "https://onecart-admin-8rbr.onrender.com"
  ],
  credentials: true
}));


app.use("/api/auth",authRoutes)
app.use("/api/user",userRoutes)
app.use("/api/product",productRoutes)
app.use("/api/cart",cartRoutes)
app.use("/api/order",orderRoutes)



connectDb().then(()=>{
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
  });
});


    



