// Custom API Response and Error Handling

import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// json data limit
app.use(express.json({
    limit: "16kb"
}))

// url data 
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
// cookie - parser
app.use(cookieParser())

export { app }