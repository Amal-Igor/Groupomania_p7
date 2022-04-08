export const isUserConnected = () => {
    if(localStorage.getItem('username') === null){
        return false
    }else {return true}
}

export const logout = () => {
    localStorage.clear();
}

export const reloadPage = () =>{
    window.location.reload();
}