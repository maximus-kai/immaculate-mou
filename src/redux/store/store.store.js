import {createStore , applyMiddleware} from 'redux'
import rootReducer from '../reducers/root.reducer'
import thunk from 'redux-thunk'


const configStore = createStore(rootReducer , applyMiddleware(thunk));

export default configStore;