export interface IGithubResponseUserDTO {
 name: string,
 bio: string,
 email: string,
 avatar_url: string
}

export interface ICreateUserDTO {
    name: string,
    bio: string,
    email: string,
    profileImage: string
    acessToken: string
}
