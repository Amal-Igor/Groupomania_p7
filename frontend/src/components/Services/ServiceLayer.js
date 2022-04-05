import axios from 'axios';
import { useState } from 'react';

const usersRoute = 'http://localhost:3001/users';

export const SignupService =  async (userDto) => {

    const user = userDto;

     return axios.post(`${usersRoute}/signup`, user)
}