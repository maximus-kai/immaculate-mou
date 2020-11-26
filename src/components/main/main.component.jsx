import React from 'react'
import {Link} from 'react-router-dom'
import SignIn from '../signin/sign-in.component'
import SideBar from '../sideBar/side-bar.component'
const Main = () => {
    return (
        <div >
            
                <div className='row p-5'>
                    <div className='col'>
                        <SignIn />
                    </div>
                    <div className='col'>
                        <SideBar/>
                    </div>
                </div>  
            <Link to='/print' className='btn btn-dark ml-5'>
                    Go to Print Page
            </Link>
        </div>
    )
}

export default Main
