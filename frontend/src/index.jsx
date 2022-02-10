import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './index.css'

import Teams from './pages/Teams'
import Home from './pages/Home'
import Games from './pages/Games'

import Footer from './components/Footer'
import Header from './components/Header'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/teams">
        <Teams/>
      </Route>
      <Route exact path="/games"><Games/></Route>

      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
