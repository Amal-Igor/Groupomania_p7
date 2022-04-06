import axios from 'axios';

const usersRoute = 'http://localhost:3001/users';

export const SignupService =  async (userDto) => {

    const user = userDto;

     return await axios.post(`${usersRoute}/signup`, user)
}