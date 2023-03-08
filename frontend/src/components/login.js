import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { logIn } from '../actions/userActions'


class Login extends Component{
    state = {
        email:'', 
        password:''
    }
    
    //? handles form state
    formChange = event => {
        this.setState({
            ...this.state, 
            [event.target.name]: event.target.value })
    }

    //? 
    formSubmit = e => {
        e.preventDefault()
        this.props.login(this.state)
        this.setState({ password:'', email:''})
        this.props.history.push('/blogs')
    }

    render(){
        return(
            <div className="main-content">
            <form id="login-form" onSubmit={this.formSubmit}>
                <label htmlFor="email"> Email:</label>
                <input type="text" value={this.state.email} name="email" onChange={this.formChange}></input><br/><br/>
                <label htmlFor="password">Password:</label>
                <input type="password" value={this.state.password} name="password" onChange={this.formChange}></input>
                <br/>
                <input type="submit"></input>
            </form>
            </div>
        )

    }
}

const mapDispatchToProps = (dispatch) => {
    return ({ login: (data) => dispatch(logIn(data)) })
}

export default connect(null, mapDispatchToProps)(Login)
