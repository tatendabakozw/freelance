import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useStateValue } from '../StateContext/StateProvider'

function PrivateRoute({component: Component, ...rest}) {
    const user = localStorage.getItem('zomuser')
    return (
        <Route {...rest} render={(props) => (
            user ? (<Component {...props} />)
              : (<Redirect to='/' />)
          )} />
    )
}

export default PrivateRoute
