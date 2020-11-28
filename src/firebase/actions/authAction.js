import {firebase , googleAuthProvider} from '../firebase'

export const startLogin = ()=> {
    return ()=>{
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export const logUserId = (uid)=>{
    return {
        type: "LOGIN",
        uid
    }
}

export const logout = ()=>{
    return {
        type: "LOGOUT"
    }
}


export const startLogout = ()=> {
    return ()=>{
        return firebase.auth().signOut();
    }
}