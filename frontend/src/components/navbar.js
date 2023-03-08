import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class NavBar extends Component {

    //? renders nav based on isLoggedIn prop
    renderSessionControl(){
        if (this.props.isLoggedIn) {
            return(
                <>
                <Link to="/blogs/new"> New Post </Link><br/>
                <Link to="/logout">Logout</Link>
                </>
            )
        } else {
            return(
                <>
                <Link to='/login'>Log In</Link><br/>
                </>
            )
        }
    }

    render(){
        return(
        <div className="navbar">
            <Link to='/about'>About</Link><br/>
            <Link to='/blogs'>View Blog</Link><br/>
            <br/>
            {this.renderSessionControl()}
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { isLoggedIn: state.user.isLoggedIn }
}

const mapDispatchToProps = (dispatch) => {
    return {
      logout: () => dispatch({type: "LOGOUT"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)