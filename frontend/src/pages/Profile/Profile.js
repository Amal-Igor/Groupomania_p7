import { ProfileWrapper } from "../../components/Container/UserInfoContainer";
import { useState, useEffect } from "react";
import { GetUserInfos } from "../../components/Services/AuthService";

export const Profile = () => {
//Récupération de l'id dans le local storage pour personnaliser la requête params
const userId = localStorage.getItem('userId');
//Récupération de l'objet user
const [user, setUser] = useState({});

useEffect( ()=> {
    GetUserInfos(userId).then( (res) => {
        setUser(res.data);
        console.log(user)
    })
}, [userId])

    return(
        <ProfileWrapper username={user.username} email={user.email}></ProfileWrapper>
    )
}