import React from 'react'
import { getBlogs } from "../actions/blogActions"
import {connect} from "react-redux"
import BlogCard from "./Blog"
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { BlogShow } from './blogShow'

class BlogIndex extends React.Component{
    componentDidMount(){
        this.props.getBlogs()
    }

    
    render(){
        const { routerProps, blogs } = this.props
            return(
                <div className="main-content">
                    {blogs.map((blog) => <Link to={`/blogs/${blog.id}`} key={blog.id}><BlogCard key={blog.id} blog={blog}/></Link>)}
                    <Route exact path={routerProps.match.url} render={() => <h3 className="blog-waiting">Select a blog to view.</h3>} />
                    <Route path={`${routerProps.match.url}/:blogId`} render={routerProps => {
                        return(<BlogShow { ...routerProps } blogs={this.props.blogs}/>)                  
                    }} />
                </div>
            )
        }}


const mapStateToProps = (state) => {
    return(
        {blogs: state.blog.all}
    )
}

export default connect(mapStateToProps, { getBlogs })(BlogIndex)