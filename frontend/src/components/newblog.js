import React from 'react'
import { Component } from 'react'
import { connect } from "react-redux"
import { createBlog } from "../actions/blogActions"

class NewBlog extends Component {
    state = {
        title: "",
        content: ""
    }

    //? changes the state when an input changes
    change = (event) => {
        this.setState({...this.state, [event.target.name]: event.target.value})
    }

    //? submits form to backend, resets state
    submit = (event) => {
        event.preventDefault()
        this.props.createBlog(this.state).then(() => this.props.history.push('/blogs'))
    }

    render(){
        if(this.props.isLoggedIn){
            return(<div className="main-content">
                <h1> What Are You Writing Today?</h1>
                <form onSubmit = {this.submit}><br/>
                    <label for="title">Title</label><br/>
                    <input type="text" name="title" value={this.state.title} onChange={this.change}/><br/>
                    <label for="content">  Content</label><br/>
                    <textarea rows="20" cols="50" name="content" value={this.state.content} onChange={this.change}/><br/>
                    <input type="submit"/>
                </form>
            </div>)
        } else {
            return(<h1 class="main-content"> Please log in to view this page</h1>)
        }
    }
}

const mapStateToProps = (state) => {
    return({ isLoggedIn: state.user.isLoggedIn })
}

export default connect(mapStateToProps, { createBlog })(NewBlog)