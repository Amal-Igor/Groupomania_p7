import axios from 'axios';

const usersRoute = 'http://localhost:3001';


// Service relatifs à l'inscription et login
export const SignupService =  async (userDto) => {

    const user = userDto;

    await axios.post(`${usersRoute}/signup`, user)
    .then(res => console.log(res))
    .catch(err => console.log(err));
}

export const LoginService =  async (userDto) => {

    const user = userDto;

     await axios.post(`${usersRoute}/login`, user)
     .then(res => {
         //Récupération du token + username pour le mettre dans le session storage
         console.log(res)
         localStorage.setItem('token', res.data.token)
         localStorage.setItem('userId', res.data.userId)
         localStorage.setItem('username', res.data.username)
        })
     .catch(err => console.log(err))
}


//TODO: comment récupérer les data dans la page profile
export const GetUserInfos = async (userId) => {
    return await axios.get(`${usersRoute}/${userId.toString()}`)
}


//Set token dans les call API
export const GetToken = () => {
    let userToken = localStorage.getItem('token');
    return userToken;
}