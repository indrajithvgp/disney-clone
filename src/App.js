import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Header from './components/Header'
import Home from './components/Home'
import Detail from './components/Detail'


const App = () => {

  return (
      <Router>
        <Header/>
          <Switch>
            <Route exact path="/">
              <Login/>
            </Route>
            <Route path="/home" component={Home}/>
            <Route path="/details/:id" component={Detail}/>
          </Switch>
      </Router>
  )
}

export default App


