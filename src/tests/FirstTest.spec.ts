import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()
  user.name = 'Neto'
  user.number = '123456'

  expect(user.name).toEqual('Neto')
})
