import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './index.css'

import Teams from './pages/Teams'
import Home from './pages/Home'
import Games from './pages/GamesPicking'
import Game from './pages/Game'

import Footer from './components/Footer'
import Header from './components/Header'
import Error from './components/Error'

import { GameProvider } from './utils/context/index'
import { GameContext } from './utils/context/index'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GameProvider>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/teams">
            <Teams />
          </Route>
          <Route exact path="/games">
            <Games />
          </Route>
          <Route exact path="/game">
            <Game />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </GameProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
