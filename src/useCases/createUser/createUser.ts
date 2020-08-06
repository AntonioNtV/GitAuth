import { ICreateUserDTO } from './createUserDTO'
import { User } from '@models/User'

export class CreateUser {
  async excecute (data: ICreateUserDTO) {
    const user = new User(data)

    // TODO
    console.log('-------------------------------')
    console.log(user)
  }
}
