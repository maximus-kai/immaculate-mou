import './App.css';
import Header from './components/header/header.component'
import configStore from './redux/store/store.store'
import {Provider} from 'react-redux'
import {BrowserRouter ,Route } from 'react-router-dom';
import main from './components/main/main.component'
import Print from './components/print/print.component'
import './firebase/firebase';
import {startSetDetail} from './redux/actions/addDetail.action';



const store = configStore;

store.dispatch(startSetDetail())
// store.dispatch(addDetail({
//   surname:"Dairo dispatched",
//   name:'maximus dispatched'
// }))
// console.log(store.getState())
const App =()=> {
 
  return (
    <Provider store = {store}>
      <BrowserRouter>
      <Header/>
        <div className="App">
          <header className="App-header">
          <Route path='/' exact component={main}/>
          <Route path='/print'  component={Print}/>
          </header>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;