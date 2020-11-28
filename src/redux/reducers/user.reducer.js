const userReducer = (state = {id:'my id'} , action) =>{
switch(action.type){
    case 'LOGIN':
        return {userId:action.uid}
    case 'LOGOUT':
        return {}
    default:
        return state;    
}
}
export default userReducer