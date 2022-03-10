import { Link } from 'react-router-dom'
import Jouer  from '../../assets/jouer.svg'
import styled from 'styled-components'
import './index.css'

const LogoJouer = styled.img`
width:100%;
height:100%`



function Home() {
  return (
    <div>
      <div className="HomeRulesContainer">
        <h1 className="HomeRulesText">Bienvenue sur Rap Jeu</h1>
      </div>
      <div className="HomeTeamButton">
        
          <Link to="/teams"><LogoJouer src={Jouer} alt="jouer"/></Link>
        
      </div>
    </div>
  )
}

export default Home
