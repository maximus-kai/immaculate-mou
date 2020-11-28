import './App.css';
import Header from './components/header/header.component'
import {Provider} from 'react-redux'
import {createBrowserHistory} from 'history'
import {Router ,Route } from 'react-router-dom';
import main from './components/main/main.component'
import Print from './components/print/print.component'
import PrivateRoute from './PrivateRoute'

export const history = createBrowserHistory();




// store.dispatch(addDetail({
//   surname:"Dairo dispatched",
//   name:'maximus dispatched'
// }))
// console.log(store.getState())
const App =({store})=> {
  return (
    <Provider store = {store}>
        <Router history = {history}>
        <Header/>
          <div className="App">
            <header className="App-header">
            <Route path='/' exact component={main}/>
            <PrivateRoute path='/print'  component={Print}/>
            </header>
          </div>
        </Router>
      </Provider>
    );
  }
  
                  // return (
                    //   <h1>loading...</h1>
                    // ) 



export default App;