import {combineReducers} from 'redux';
import detailReducer from './detail.reducer'

const rootReducer = combineReducers({
    detail:detailReducer
})

export default rootReducer;