import {combineReducers} from 'redux';
import detailReducer from './detail.reducer'
import userReducer from './user.reducer'

const rootReducer = combineReducers({
    detail:detailReducer,
    userId:userReducer
})

export default rootReducer;