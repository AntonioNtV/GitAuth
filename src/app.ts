import express from 'express'
import { router } from './routes'
import * as dotenv from 'dotenv'

export class App {
    public express: express.Application

    constructor () {
      dotenv.config()
      this.express = express()
      this.initialization()
    }

    private initialization () {
      this.middlewares()
    }

    private middlewares () {
      this.express.use(router)
    }
}
