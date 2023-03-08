import React from 'react';
import { connect } from 'react-redux';
import {logout} from '../actions/userActions'

class Logout extends React.Component {
    componentDidMount(){
        this.props.logout()
    }

    render() { 
        return (
            <h1 className="main-content"> Logged Out </h1>
        );
    }
}
 
export default connect(null, { logout })(Logout);