import { Link } from 'react-router-dom'

import './index.css'

function Home() {
  return (
    <div>
      <div className="HomeRulesContainer">
        <h1 className="HomeRulesText">Bienvenue sur Rap Jeu</h1>
      </div>
      <div className="HomeTeamButton">
        <button>
          <Link to="/teams">JOUER</Link>
        </button>
      </div>
    </div>
  )
}

export default Home
