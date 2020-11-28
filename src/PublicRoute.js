import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const PublicRoute =({isAuthenticated , component:Component , ...rest})=> (
    // console.log(props.component)
    
       <Route {...rest} render = {(props)=>(
           isAuthenticated?(
               <Redirect to='/print'/>
           ):
           (
           <Component {...props}  />
           )
       )} />

);

const mapStateToProps = (state) =>({
    isAuthenticated: !!state.userId.userId
});

export default connect(mapStateToProps)(PublicRoute);
