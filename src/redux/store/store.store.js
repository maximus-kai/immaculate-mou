import {createStore} from 'redux'
import rootReducer from '../reducers/root.reducer'


const configStore = createStore(rootReducer);

export default configStore;