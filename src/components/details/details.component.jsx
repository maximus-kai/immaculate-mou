import React ,{useState} from 'react';
import {connect} from 'react-redux'
import startAddDetail from '../../redux/actions/addDetail.action';
import {startSetDetail} from '../../redux/actions/addDetail.action';

const Details = (props) => {
    const [detail , setDetail] = useState(
        {
            surname:'',
            name:'',

        }
    );
    const logIt = (e) =>{
        setDetail((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
        console.log(`${e.target.name}`,e.target.value)
    }

    const Generate = (e)=>{
        e.preventDefault()
        // console.log('surname:',detail.surname)
        // console.log('name:',detail.name)
        props.dispatch(startAddDetail({
            surnameFromPage:detail.surname,
            nameFromPage:detail.name
          }))
        // props.dispatch(startSetDetail({
        //     surnameFromPage:detail.surname,
        //     nameFromPage:detail.name
        //   }))
        
    }

    
    // console.log('Redux Store Value:',props.storeSurname)
    // console.log('Redux Store Value:',props.storeName)
    
    return (
        <div className='mr-5'>
        {/* <h3>{props.storeSurname} is the surname gotten from the Redux Store</h3>
        <h3>{props.storeName} is the name gotten from the Redux Store</h3> */}
        <h4 className='text-center'>Details</h4>
           <form>
                              <div className="form-group">
                                  <input 
                                  type="text" 
                                  className="form-control form-control-lg mb-2"
                                  placeholder="Surname"
                                  name="surname"
                                  value={detail.surname}
                                  onChange={logIt}
                                  ></input>
                                  <input 
                                  type="text" 
                                  className="form-control form-control-lg mb-2"
                                  placeholder="Name"
                                  name="name"
                                  value={detail.name}
                                  onChange={logIt}
                                  ></input>
                                  <button className="btn btn-primary btn-lg btn-block mb-5 " 
                                  type="submit"
                                  onClick={Generate}
                                //   onClick={this.findTrack.bind(this ,dispatch)}
                                  >
                                  
                                    Generate (MOU)
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-printer ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 2H5a1 1 0 0 0-1 1v2H3V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h-1V3a1 1 0 0 0-1-1zm3 4H2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1v1H2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z"/>
                                    <path fill-rule="evenodd" d="M11 9H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM5 8a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H5z"/>
                                    <path d="M3 7.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                                    </svg>
                                  </button>
                              </div>
                          </form> 
        </div>
    )
}
const mapStateToProps = (state) => ({
    storeSurname:state.detail.surname,
    storeName:state.detail.name
});

export default connect(mapStateToProps)(Details)
