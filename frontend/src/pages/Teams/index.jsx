import { Link } from 'react-router-dom'
import { useContext } from 'react'
import {GameContext} from '../../utils/context'

function Teams() {

  const {team1, team2, changeTeams} = useContext(GameContext)
  return (
    <div>
      <h1>Création des équipes </h1>

      <input
        type="text"
        value={team1}
        onChange={(event) => changeTeams(event, 'team1')}
      />
      <input
        type="text"
        value={team2}
        onChange={(event) => changeTeams(event, 'team2')}
      />
      {console.log(team1, team2)}
      <Link to="/games">Choisir les jeux</Link>
    </div>
  )
}

export default Teams
