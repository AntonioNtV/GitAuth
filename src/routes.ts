import { Router, request, response } from 'express'
import axios from 'axios'
import { createUserController } from './useCases/createUser'

const router = Router()

router.get('/signin/callback', (request, response) => {
  return createUserController.handle(request, response)
})

export { router }
