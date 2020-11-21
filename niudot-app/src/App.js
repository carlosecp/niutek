import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AuthState from './context/auth/AuthState'
import Home from './components/layout/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

// * Comentarios para Juan
{
  /* Okay Juan, te voy a guiar a traves de este laberinto, porque ya casi que parece Java esto (sin el script).
	Primero tenes que irte al archivo PersonaNatural...
	*/
}

function App() {
  return (
    <AuthState>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route component={Home} />
        </Switch>
      </Router>
    </AuthState>
  )
}

export default App
