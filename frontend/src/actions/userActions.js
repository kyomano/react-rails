
export const isLoggedIn = () => {
     
}

export const signUp = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                "withCredentials": true,
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({user: data})
        })
        .then(resp => resp.json())
        .then(jsonresp => {
            debugger
            dispatch({type: "LOGIN", payload: jsonresp}
            )
        })
        .catch(err => console.log(err))

    }
}

export const logIn = (data) => {
    return (dispatch) => {
        fetch ('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                "withCredentials": true,
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({user: data})
        })
          .then(resp => { 
            return resp.json()
            })
          .then(serverdata => {
              console.log(serverdata)
              dispatch({type: "LOGIN", payload: serverdata})
          })
          .catch(err => console.log(err))
    }
}

export const logout = () => {
    return (dispatch) => {
    fetch ('http://localhost:3001/logout', {
        method: 'DELETE',
        headers: {
            "withCredentials": true,
            "content-type": "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify('')
    })
    dispatch({type: "LOGOUT"})
    }
} 

