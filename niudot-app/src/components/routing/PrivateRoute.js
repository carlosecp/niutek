import React, { useContext } from 'react'
import { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import authContext from '../../context/auth/authContext'

function PrivateRoute({ component: Component, ...rest }) {
  const { isAuthenticated, loading } = useContext(authContext)

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && loading ? (
          <Redirect to='/login' />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

export default PrivateRoute
