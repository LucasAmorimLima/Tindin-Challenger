import express from 'express'
import cors from "cors";
import mongoose from 'mongoose'
import user from './routes/user'
import classe from './routes/classes'
import comment from './routes/comments'
import swaggerUi from 'swagger-ui-express'
import swaggerDocs from './swagger.json'
class App {
    public express: express.Application

    public constructor() {
        this.express = express()
        this.middlewares()
        this.routes()
        this.database()
    }

    private middlewares() {
        this.express.use(express.json())
        this.express.use(cors())
        this.express.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerDocs))
    }

    private routes() {
        this.express.use(user)
        this.express.use(classe)
        this.express.use(comment)
    }
    private database() {
        mongoose.connect('mongodb+srv://adm:1d494E7E@cluster0.i0zjh.mongodb.net/chalengerdb?retryWrites=true&w=majority')
    }
}

export default new App().express