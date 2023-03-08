import React from 'react'

export const BlogShow = ({ match, blogs }) => {
    console.log(match)
    console.log(blogs)
    return(
        <div className='blog-show'>
            <h1> { blogs[`${match.params.blogId - 1}`].title }</h1>
            <p>{ blogs[`${match.params.blogId - 1}`].content }</p>
        </div>
    )
}