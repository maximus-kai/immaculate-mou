import React, { Component } from 'react'
// import {signInWithGoogle} from '../../../firebase/firebase.utils'

class SignIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:''
        }
    }
    
handleSubmit = (e) => {
    e.preventDefault();
    this.setState(
        {
            email:'',
            password:''
        }
    );
    console.log(this.state)
}
handleChange = (e) =>{
    const {name ,value} = e.target;
    this.setState(
        {
            [name]:value
        }
    )
    console.log(this.state)

    console.log(value)
}

    render() {
        return (
            <div className='container'>
            <h1>Already have an account?</h1>
            <h6>Why don't you Sign in Here...</h6>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input
                         type="email" 
                         name='email'
                         className="form-control"
                          id="email"
                         value={this.state.email}
                         onChange={this.handleChange}
                         required
                          aria-describedby="emailHelp"/>
                        <small 
                        id="emailHelp" 
                        className="form-text text-muted">
                        We'll never share your email with anyone else.
                        </small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input 
                        type="password" 
                        name='password'
                        className="form-control" 
                        required
                        onChange={this.handleChange}
                        value={this.state.password}
                         id="Password"/>
                    </div>
                    <div className="form-group form-check">
                        <input
                         type="checkbox"
                          className="form-check-input" 
                          id="exampleCheck1"/>
                        <label 
                        className="form-check-label" 
                        for="exampleCheck1">
                        Check me out
                        </label>
                    </div>
                    <button
                     type="submit" 
                     value='submit form'
                     className="btn btn-primary">
                     Sign in
                     </button>
                    <button
                    // onClick={signInWithGoogle}
                     className="btn btn-success ml-2">
                     Sign in with google
                     </button>
                </form>
            </div>
        )
    }
}

export default SignIn
