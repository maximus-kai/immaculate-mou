import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App , {history} from './App';
import reportWebVitals from './reportWebVitals';
import {firebase} from './firebase/firebase';
import {startSetDetail} from './redux/actions/addDetail.action';
import configStore from './redux/store/store.store'
import { logout, logUserId } from './firebase/actions/authAction';
import ReactPDF, { PDFViewer } from '@react-pdf/renderer';
import { MyDocument } from './components/print/print-pdf.component';

// import {createBrowserHistory} from 'history'




const store = configStore;


// export const history = createBrowserHistory();

let hasRendered = false
const renderApp = () => {
  if(!hasRendered){

    // 
    ReactDOM.render(
    <React.StrictMode>
      <App store={store}/>
    </React.StrictMode>,
    document.getElementById('root'))

// ReactDOM.render(<PDFViewer><MyDocument/></PDFViewer>, document.getElementById('root'));
// ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);

    // 
    hasRendered = true
    // 
    }
  }

  ReactDOM.render(
    <h3 className='mt-5 text-center'>Loading...</h3>,
    document.getElementById('root'))

  
  
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){

      store.dispatch(logUserId(user.uid))
      store.dispatch(startSetDetail())
      renderApp()
      if(history.location.pathname === '/'){
          history.push('/print')
        }
        // console.log('User is logged in as: ',user.displayName)
      }else{
      store.dispatch(logout())
        renderApp()
    history.push('/')
    console.log(`user is not logged in` )
  }
})



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
