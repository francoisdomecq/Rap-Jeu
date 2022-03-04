import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './index.css'

import Teams from './pages/TeamsCreation'
import Home from './pages/Home'
import Games from './pages/GamesPicking'
import Game from './pages/Games'
import RollandGamos from './pages/Games/RollandGamos'
import PetitsChats from './pages/Games/3PetitsChats'
import RapGenieOuGenant from './pages/Games/RapGenieOuGenant'
import Enchere from './pages/Games/Encheres'
import Top5 from './pages/Games/Top5'
import CrossFeaturing from './pages/Games/CrossFeaturing'
import MythoPasMytho from './pages/Games/MythoPasMytho'

import Footer from './components/Footer'
import Header from './components/Header'
import Error from './components/Error'
import TeamsContainer from './components/Teams'

import { GameProvider } from './utils/context/index'
import { TeamProvider } from './utils/context/index'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GameProvider>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <TeamProvider>
            <Route exact path="/teams">
              <Teams />
            </Route>
            <Route exact path="/games">
              <Games />
            </Route>
            <Route exact path="/game">
              <TeamsContainer />
              <Game />
            </Route>
            <Route exact path="/Top 5">
              <TeamsContainer />
              <Top5 />
            </Route>
            <Route exact path="/Les 3 petits chats">
              <TeamsContainer />
              <PetitsChats />
            </Route>
            <Route exact path="/Le CrossFeaturing">
              <TeamsContainer />
              <CrossFeaturing />
            </Route>
            <Route exact path="/Le Mytho Pas Mytho">
              <TeamsContainer />
              <MythoPasMytho />
            </Route>
            <Route exact path="/Rap génie ou rap gênant">
              <TeamsContainer />
              <RapGenieOuGenant />
            </Route>
            <Route exact path="/Les enchères">
              <TeamsContainer />
              <Enchere />
            </Route>
            <Route exact path="/Rolland Gamos">
              <TeamsContainer />
              <RollandGamos />
            </Route>
          </TeamProvider>
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
