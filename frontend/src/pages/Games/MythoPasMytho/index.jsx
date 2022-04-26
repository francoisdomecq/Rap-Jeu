import { useState, useEffect, useContext } from 'react'
import { GameContext, TeamContext } from '../../../utils/context'
import { generateRandomNumber } from '../../../utils/functions/random'
import { Link } from 'react-router-dom'

import TeamSelection from '../../../components/TeamSelection'
import ContainerThemeSuggestion from '../../../components/ContainerThemeSuggestion'
import {
  ContainerRow,
  ContainerColumn,
  TextAnswer,
  TextButton,
  ContainerRowAnswer,
  ContainerAnswer,
  ButtonAnswer,
  ContinuerContainer,
  Iframe,
  ContainerImage,
  Image,
  Wrapper,
  ContainerRowTeamAnswering,
  ContainerColumnGlobal,
  ContainerColumnAnswer,
  TextLink,
} from './styles'

import { LoaderWrapper, Loader } from '../../../utils/styles/Atoms'
import Redbull from '../../../assets/PNG/redbull.png'

function MythoPasMytho() {
  //Tableau contenant les 4 objets (question, réponse, illustration, type) sélectionnés aléatoirement
  const [mythoPasMythoData, setData] = useState([])
  //Compteur du nombre de réponses données par les joueurs. On change de jeu lorsque celle-ci vaut 4
  const [answerNumber, updateAnswerNumber] = useState(0)
  //Booléen qui prend la valeur true/false ou null. Il est utilisé pour gérer l'affichage des questions et réponses
  const [answerGiven, setAnswerGiven] = useState(null)
  //Booléen qui permet d'afficher le loader tant que les données n'ont pas été chargées
  const [isDataLoading, setDataLoading] = useState(true)
  const { updateGamesPlayed, games, teamAnswering, setTeamAnswering } =
    useContext(GameContext)
  const { team1, team2, updateScore } = useContext(TeamContext)

  //Cette fonction permet d'ajouter 4 valeurs en même temps au tableau mythoPasMythoData
  const updateData = (value1, value2, value3, value4) => {
    let newData = [...mythoPasMythoData]
    newData.push(value1, value2, value3, value4)
    setData(newData)
  }

  //Cette fonction permet de compter le nombre de réponses données, de réinitialiser answerGiven et de changer l'équipe qui doit répondre
  function updateAnswer() {
    updateGamesPlayed('Le Mytho Pas Mytho', answerNumber, updateAnswerNumber)
    setAnswerGiven(null)
    if (teamAnswering === team1) setTeamAnswering(team2)
    else setTeamAnswering(team1)
  }

  //Cette fonction est appelée lorsqu'un utilisateur clique sur les boutons Mytho/Pas Mytho
  function answer(answer) {
    //On change la valeur de answerGiven qui valait null avant pour afficher les réponses
    setAnswerGiven(answer)
    //On regarde si la réponse inclut 'Pas mytho' (=true) auquel cas si l'utilisateur a répondu true, on lui accorde les points
    //On regarde aussi si la réponse n'inclut pas 'Pas mytho' (=false) auquel cas si l'utilisateur a répondu false, on lui accorde les points
    //Sinon, il ne gagne pas de points
    if (
      (answer === true &&
        mythoPasMythoData[answerNumber].reponse.includes('Pas mytho')) ||
      (answer === false &&
        !mythoPasMythoData[answerNumber].reponse.includes('Pas mytho'))
    ) {
      updateScore(5, teamAnswering)
    }
  }

  //Fonction utilisée au chargement de la page pour récupérer les données de jeu
  useEffect(() => {
    fetch(`https://rapjeu-backend.herokuapp.com/api/mythopasmytho`)
      .then((response) => response.json())
      .then((requestData) => {
        //On génère 4 nombre aléatoires compris entre 0 et le nombre d'éléments de la table mythopasmytho
        const [n1, n2, n3, n4] = generateRandomNumber(requestData.length - 1)
        //On met à jour la variable mythoPasMythoData en lui ajoutant 4 objets à l'aide de la fonction updateData
        updateData(
          requestData[n1],
          requestData[n2],
          requestData[n3],
          requestData[n4]
        )
        //Les données ne chargent plus, on change donc la valeur de isDataLoading
        setDataLoading(false)
        //Puisque les deux équipes répondent à 2 questions, l'ordre importe peu
        setTeamAnswering(team1)
      })
      .catch((error) => console.log(error))
  }, [])

  return isDataLoading ? (
    <Wrapper>
      <LoaderWrapper>
        <Loader src={Redbull} />
      </LoaderWrapper>
    </Wrapper>
  ) : (
    <Wrapper>
      {teamAnswering ? (
        ''
      ) : (
        <ContainerColumn>
          <ContainerRowTeamAnswering>
            <TeamSelection
              team1={team1}
              team2={team2}
              teamAnswering={teamAnswering}
              setTeamAnswering={setTeamAnswering}
              game={'Mytho pas Mytho'}
            />
          </ContainerRowTeamAnswering>
        </ContainerColumn>
      )}
      <ContainerColumnGlobal>
        {answerGiven === null && teamAnswering ? (
          <ContainerRowAnswer>
            <ButtonAnswer onClick={() => answer(true)}>
              <TextButton>Pas mytho</TextButton>
            </ButtonAnswer>
            <ButtonAnswer onClick={() => answer(false)}>
              <TextButton>Mytho</TextButton>
            </ButtonAnswer>
          </ContainerRowAnswer>
        ) : null}
        {answerGiven !== null ? (
          <ContainerColumnAnswer>
            <ContainerAnswer>
              <TextAnswer>{mythoPasMythoData[answerNumber].reponse}</TextAnswer>
            </ContainerAnswer>
            <ContainerRow>
              {mythoPasMythoData[answerNumber].type === 'video' ? (
                <Iframe
                  src={mythoPasMythoData[answerNumber].illustration}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></Iframe>
              ) : mythoPasMythoData[answerNumber].type === 'image' ? (
                <ContainerImage>
                  <Image
                    src={mythoPasMythoData[answerNumber].illustration}
                    alt=""
                  />
                </ContainerImage>
              ) : (
                <ContainerRow style={{ width: '50%' }}>
                  <a
                    rel="noreferrer"
                    href={mythoPasMythoData[answerNumber].illustration}
                    target="_blank"
                  >
                    {mythoPasMythoData[answerNumber].illustration}
                  </a>
                </ContainerRow>
              )}
            </ContainerRow>
            <ContainerColumn>
              {answerGiven !== null ? (
                answerNumber < 3 ? (
                  <ContinuerContainer onClick={() => updateAnswer()}>
                    <TextLink>Question suivante</TextLink>
                  </ContinuerContainer>
                ) : (
                  <ContinuerContainer>
                    <Link
                      style={{ textDecoration: 'none', color: 'white' }}
                      to={`/${
                        games[games.indexOf('Le Mytho Pas Mytho') + 1]
                      }?game=${games[games.indexOf('Le Mytho Pas Mytho') + 1]}`}
                      onClick={() => updateAnswer()}
                    >
                      <TextLink>
                        Continuer vers <br />{' '}
                        {games[games.indexOf('Le Mytho Pas Mytho') + 1]}
                      </TextLink>
                    </Link>
                  </ContinuerContainer>
                )
              ) : null}
            </ContainerColumn>
          </ContainerColumnAnswer>
        ) : null}
      </ContainerColumnGlobal>
      {teamAnswering ? (
        <ContainerColumn>
          <ContainerThemeSuggestion
            theme={mythoPasMythoData[answerNumber].question}
          />
        </ContainerColumn>
      ) : null}
    </Wrapper>
  )
}

export default MythoPasMytho
