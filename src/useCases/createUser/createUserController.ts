import { Request, Response } from 'express'
import axios from 'axios'
import { IGithubResponseUserDTO, ICreateUserDTO } from './createUserDTO'
import { CreateUser } from './createUser'

export class CreateUserController {
  constructor (
        private createUserUseCase: CreateUser
  ) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { code } = request.query

    if (!code) {
      return response.status(404).json({
        message: 'Error: Not abble to get github code.'
      })
    }

    const clientId = process.env.GITHUB_APP_CLIENT_ID
    const clientSecret = process.env.GITHUB_APP_CLIENT_SECRET

    const tokenRequest = await axios.post('https://github.com/login/oauth/access_token', {
      client_id: clientId,
      client_secret: clientSecret,
      code: code
    }, {
      headers: {
        Accept: 'application/json'
      }
    })

    const accesToken = tokenRequest.data.access_token

    if (!accesToken) {
      return response.status(401).json({
        message: 'Error: Not abble to get github acess token. '
      })
    }

    const userData: IGithubResponseUserDTO = (await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: 'token ' + accesToken
      }
    })).data

    const username = userData.name
    const userbio = userData.bio
    const userProfileImage = userData.avatar_url
    const userEmail = userData.email

    const user: ICreateUserDTO = {
      name: username,
      bio: userbio,
      profileImage: userProfileImage,
      email: userEmail,
      acessToken: accesToken
    }

    await this.createUserUseCase.excecute(user)

    return response.status(200).json({
      message: 'User created'
    })
  }
}
