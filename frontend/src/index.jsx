import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './index.css'

import Teams from './pages/TeamsCreation'
import Home from './pages/Home'
import Games from './pages/GamesPicking'
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
import Background from './components/Background'

import { GameProvider, TeamProvider } from './utils/context/index'

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
            <Route exact path="/Top 5">
              <Background />
              <TeamsContainer game={'Top 5'} />
              <Top5 />
            </Route>
            <Route path="/Les 3 petits chats">
              <Background />
              <TeamsContainer game={'3 petits chats'} />
              <PetitsChats />
            </Route>
            <Route path="/Le CrossFeaturing">
              <Background />
              <TeamsContainer game={'Crossfeaturing'} />
              <CrossFeaturing />
            </Route>
            <Route path="/Le Mytho Pas Mytho">
              <Background />
              <TeamsContainer game={'Mytho pas Mytho'} />
              <MythoPasMytho />
            </Route>
            <Route path="/Rap g??nie ou rap g??nant">
              <Background />
              <TeamsContainer game={'Rap g??nie ou g??nant'} />
              <RapGenieOuGenant />
            </Route>
            <Route path="/Les ench??res">
              <Background />
              <TeamsContainer game={'Les ench??res'} />
              <Enchere />
            </Route>
            <Route path="/Rolland Gamos">
              <Background />
              <TeamsContainer game={'Rolland Gamos'} />
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
