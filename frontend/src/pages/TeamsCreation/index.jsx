import { Link } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { TeamContext } from '../../utils/context'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'
import Loader from '../../utils/styles/Atoms'
import Redbull from '../../assets/redbull.png'
import Jouer from '../../assets/jouer.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const ContainerTeam = styled.div`
  display: flex;
  width: 1000px;
  justify-content: space-between;
`

const QuestionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px;
  padding-right: 20px;
  padding-left: 20px;
  height: 50px;
  border-radius: 30px;
  background-color: ${colors.red};
  font-size: 20px;
  font-weight: bold;
  color: white;
`
const TeamWrapper = styled.div`
  width: 350px;
  background-color: ${colors.blue};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: white;
  border-radius: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 20px;
`
const TeamName = styled.input`
  display: flex;
  border-radius: 20px;
  width: 300px;
  height: 40px;
  font-size: 18px;
  background-color: ${colors.yellow};
  color: ${colors.blue};
  align-items: center;
  text-center: align;
`

const ButtonValider = styled.button`
  background-color: ${colors.red};
  border-radius: 70px;
  border: none;
  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  opacity: ${({ bothTeamsRegistered }) => (bothTeamsRegistered ? '1' : '0.4')};
`

const LoaderWrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LogoJouer = styled.img`
  width: 100%;
  height: 100%;
`
function Teams() {
  const [isDataLoading, setDataLoading] = useState(true)
  const { team1, team2, changeTeams, questionTeam, changeQuestionTeams } =
    useContext(TeamContext)

  function refreshPage() {
    window.location.reload(false)
  }

  useEffect(() => {
    fetch(`http://localhost:3001/api/nomequipe`)
      .then((response) => response.json())
      .then((requestData) => {
        if (team1 === '' && team2 === '' && questionTeam === '') {
          let randomData = Math.floor(Math.random() * requestData.length)
          changeQuestionTeams(requestData[randomData].question)
          changeTeams(requestData[randomData].debutNomE1, 'team1', 'fetch')
          changeTeams(requestData[randomData].debutNomE2, 'team2', 'fetch')
          setDataLoading(false)
        }
      })
      .catch((error) => console.log(error))
  })
 

  return isDataLoading ? (
    <LoaderWrapper>
      <Loader src={Redbull} />
    </LoaderWrapper>
  ) : (
    <Container>
       {console.log(questionTeam)}
      <h1>Création des équipes</h1>
      <p>
        Avant de commencer, il faut bien évidemment commencer par le choix du
        nom des équipes ! Pour ça, tu vas poser une petite question aux deux
        équipes. Si la question vous inspire pas, tu peux bien entendu en
        charger une autre
      </p>
      <p>
        Et comme tu peux le voir les noms des deux équipes sont déjà pré-remplis
        comme dans l'émission ! T'as plus qu'à écrire leurs réponses avant ou
        après en fonction de ce qui sonne le mieux, ou le moins bien si tu
        préfères..
      </p>

      <QuestionWrapper>{questionTeam}</QuestionWrapper>
      <div>
        <button onClick={refreshPage}>Changer de question</button>
      </div>

      <ContainerTeam>
        <TeamWrapper>
          <p>EQUIPE 1</p>
          <TeamName
            type="text"
            value={team1}
            onChange={(event) => changeTeams(event, 'team1', 'input')}
          />
        </TeamWrapper>
        <TeamWrapper>
          <p>EQUIPE 2</p>
          <TeamName
            type="text"
            value={team2}
            onChange={(event) => changeTeams(event, 'team2', 'input')}
          />
        </TeamWrapper>
      </ContainerTeam>

      <Link to="/games">
        <LogoJouer src={Jouer} alt="jouer" />
      </Link>
    </Container>
  )
}

export default Teams
