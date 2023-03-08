import React from 'react'
// import { BrowserRouter as Route } from "react-router-dom"
// import {BlogShow} from './blogShow'

class BlogCard extends React.Component{

    render(){
        return(
        <div className="blog-card">
            <h1>{this.props.blog.title}</h1>
        </div>
        )
    }
}

export default BlogCard
