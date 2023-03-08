export const getBlogs = () => {
    return(dispatch) => {
        fetch('http://localhost:3001/blogs')
        .then(resp => resp.json())
        .then(data => dispatch({type: "GET_BLOGS", payload: data}))
        .catch(error => console.log(error))
    }
}

export const createBlog = (data) => {
    return(dispatch) => {
        return(fetch('http://localhost:3001/blogs', {
            method: "POST",
            headers:{
                "content-type":"application/json",
                "accept":"application/json"
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json)
        .then(data => dispatch({type: "NEW_BLOG", payload: data}))
        .catch(error => console.log(error)))
    }
}