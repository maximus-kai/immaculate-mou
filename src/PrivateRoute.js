import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute =({isAuthenticated , component:Component , ...rest})=> (
    // console.log(props.component)
    
       <Route {...rest} render = {(props)=>(
           isAuthenticated?(
           <Component {...props}  />
           ):
           (
               <Redirect to='/'/>
           )
       )} />

);

const mapStateToProps = (state) =>({
    isAuthenticated: !!state.userId.userId
});

export default connect(mapStateToProps)(PrivateRoute);
