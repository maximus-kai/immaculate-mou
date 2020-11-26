const { Switch } = require("react-router-dom")

const INIT_STATE = {
    surname:'',
    name:''
}
const detailReducer = (state = INIT_STATE , action) =>{
    switch(action.type){
        case 'ADD_DETAILS':
            return {
                ...state,
                surname:action.detail.surname,
                name:action.detail.name


            }
        default:
            return state    
    }

}

export default detailReducer;