import { useState, useEffect, useContext } from 'react'
import { GameContext, TeamContext } from '../../../utils/context'
import { Link } from 'react-router-dom'

import CrossFeaturingArray from '../../../components/CrossFeaturing'
import HasGameStarted from '../../../utils/functions/hasGameStarted'

import {
  RappeurContainer,
  SecondContainer,
  InputContainer,
  SearchContainer,
  Text,
  RapperInput,
  SearchInput,
  Header,
  RappersContainer,
  TableBottom,
  ContainerTeam,
  SearchLogos,
  ContainerTeamSelection,
  ContainerTeamAnswer,
  ContinuerContainer,
} from './styles'
import { TextBlue } from '../../../utils/styles/Text'
import { ContainerRow, ContainerColumn } from '../../../utils/styles/Containers'
import '../../../utils/animations/Bouncing/crossFeaturingBouncingLetters.css'
import '../../../utils/animations/Bouncing/animationBouncing.css'

import MusicBrainzLogo from '../../../assets/rollandgamos/MusicBrainz_Logo.png'
import YoutubeLogo from '../../../assets/rollandgamos/icons8-youtube.svg'
import RapGeniusLogo from '../../../assets/rollandgamos/RapGenius_Logo.png'

function CrossFeaturing() {
  const [crossFeaturing, setCrossFeaturing] = useState()
  const [answerNumber, updateAnswerNumber] = useState(0)
  const [teamWinner, setTeamWinner] = useState('')
  const [rappersTeam1, setRappersTeam1] = useState([])
  const [rappersTeam2, setRappersTeam2] = useState([])
  const [rappeur1Search, setRappeur1Search] = useState('')
  const [rappeur2Search, setRappeur2Search] = useState('')
  const { games, updateGamesPlayed } = useContext(GameContext)
  const { team1, team2, updateScore } = useContext(TeamContext)

  function selectCrossFeaturing(crossFeaturing) {
    setCrossFeaturing(crossFeaturing)
  }
  function addRappers(e, team) {
    if (e.key === 'Enter') {
      if (team === 'team1') {
        rappersTeam1.push(e.target.value)
        const newRapper = [...rappersTeam1]
        setRappersTeam1(newRapper)
        e.target.value = ''
      } else {
        rappersTeam2.push(e.target.value)
        const newRapper = [...rappersTeam2]
        setRappersTeam2(newRapper)
        e.target.value = ''
      }
    }
  }
  const updateAnswer = () => {
    updateGamesPlayed('Le CrossFeaturing', answerNumber, updateAnswerNumber)
    setCrossFeaturing()
    setRappersTeam1([])
    setRappersTeam2([])
    if (teamWinner === team1) updateScore(5, team1)
    else if (teamWinner === team2) updateScore(5, team2)
    setTeamWinner()
  }
  // HasGameStarted()
  return (
    <ContainerRow>
      {/* Plutôt que tableau faire truc en ligne*/}
      {console.log(rappersTeam1, rappersTeam2)}
      <div className="bouncing-text">
        <div className="l-cf">l</div>
        <div className="e-cf">e</div>
        <p style={{ color: 'transparent', lineHeight: 0 }}>''</p>
        <div className="c-cf">c</div>
        <div className="r-cf">r</div>
        <div className="o-cf">o</div>
        <div className="s-cf">s</div>
        <div className="s1-cf">s</div>
        <div className="f-cf">f</div>
        <div className="e1-cf">e</div>
        <div className="a-cf">a</div>
        <div className="t-cf">t</div>
        <div className="u-cf">u</div>
        <div className="r1-cf">r</div>
        <div className="i-cf">i</div>
        <div className="n-cf">n</div>
        <div className="g-cf">g</div>
      </div>
      <ContainerColumn>
        <ContainerRow>
          {!crossFeaturing ? (
            <SecondContainer>
              <CrossFeaturingArray
                selectCrossFeaturing={selectCrossFeaturing}
              />
            </SecondContainer>
          ) : (
            <ContainerColumn>
              <ContainerRow>
                <ContainerRow style={{ marginTop: '2%' }}>
                  <ContainerTeamAnswer>
                    <TextBlue>Equipe 1</TextBlue>
                    <Header>Rappeurs cités</Header>
                    <RappersContainer>
                      {rappersTeam1.length > 0
                        ? rappersTeam1.map((rapper) => <p>{rapper}</p>)
                        : null}
                    </RappersContainer>
                    <TableBottom />
                    <TextBlue>Nouveau rappeur</TextBlue>
                    <RapperInput
                      type="search"
                      onKeyPress={(e) => addRappers(e, 'team1')}
                    />
                  </ContainerTeamAnswer>
                  <ContainerRow style={{ width: '25%' }}>
                    <TextBlue>
                      {crossFeaturing.rappeur1}-{crossFeaturing.rappeur2}
                    </TextBlue>
                  </ContainerRow>
                  <ContainerTeamAnswer>
                    <TextBlue>Equipe 2</TextBlue>
                    <Header>Rappeurs cités</Header>
                    <RappersContainer>
                      {rappersTeam2.length > 0
                        ? rappersTeam2.map((rapper) => <p>{rapper}</p>)
                        : null}
                    </RappersContainer>
                    <TableBottom />

                    <TextBlue>Nouveau rappeur</TextBlue>
                    <RapperInput
                      type="search"
                      onKeyPress={(e) => addRappers(e, 'team2')}
                    />
                  </ContainerTeamAnswer>
                </ContainerRow>
                <SearchContainer>
                  <TextBlue>Un doute sur un featuring ? </TextBlue>
                  <InputContainer>
                    <SearchInput
                      type="search"
                      placeholder={rappeur1Search}
                      value={rappeur1Search}
                      onChange={(e) => setRappeur1Search(e.target.value)}
                    />
                    <SearchInput
                      type="search"
                      placeholder="rappeur 2"
                      onChange={(e) => setRappeur2Search(e.target.value)}
                    />
                  </InputContainer>
                  <SearchLogos>
                    <a
                      rel="noreferrer"
                      href={`https://www.youtube.com/results?search_query=${rappeur1Search}+${rappeur2Search}`}
                      target="_blank"
                    >
                      <img
                        style={{ width: 96, height: 96 }}
                        src={YoutubeLogo}
                        alt="Chercher sur youtube"
                      />
                    </a>
                    <a
                      rel="noreferrer"
                      href={`https://musicbrainz.org/search?query=${rappeur1Search}%20feat.%20${rappeur2Search}&type=recording&limit=5&method=advanced`}
                      target="_blank"
                    >
                      <img
                        src={MusicBrainzLogo}
                        style={{ width: 96, heigth: 96 }}
                        alt="Chercher sur MusicBrainz"
                      />
                    </a>
                    <a
                      rel="noreferrer"
                      href={`https://genius.com/search?q=${rappeur1Search}%20${rappeur2Search}`}
                      target="_blank"
                    >
                      <img
                        src={RapGeniusLogo}
                        style={{ width: 96, heigth: 96 }}
                        alt="Chercher sur RapGenius"
                      />
                    </a>
                  </SearchLogos>
                </SearchContainer>
              </ContainerRow>
              <SecondContainer>
                <ContainerTeamSelection>
                  <TextBlue>Equipe gagnante</TextBlue>
                  <ContainerRow>
                    <ContainerTeam
                      isSelected={teamWinner === team1}
                      onClick={() => setTeamWinner(team1)}
                    >
                      <Text style={{ color: 'white', fontSize: 18 }}>
                        {team1}
                      </Text>
                    </ContainerTeam>
                    <ContainerTeam
                      isSelected={teamWinner === team2}
                      onClick={() => setTeamWinner(team2)}
                    >
                      <Text style={{ color: 'white', fontSize: 18 }}>
                        {team2}
                      </Text>
                    </ContainerTeam>
                  </ContainerRow>
                </ContainerTeamSelection>
              </SecondContainer>

              <ContainerColumn style={{ width: 50, height: 50 }}>
                {answerNumber < 2 ? (
                  <ContinuerContainer onClick={() => updateAnswer()}>
                    Manche suivante
                  </ContinuerContainer>
                ) : (
                  <ContinuerContainer>
                    <Link
                      style={{ textDecoration: 'none', color: 'white' }}
                      to={`/${
                        games[games.indexOf('Le CrossFeaturing') + 1]
                      }?game=${games[games.indexOf('Le CrossFeaturing') + 1]}`}
                      onClick={() => updateAnswer()}
                    >
                      Continuer vers <br />{' '}
                      {games[games.indexOf('Le CrossFeaturing') + 1]}
                    </Link>
                  </ContinuerContainer>
                )}
              </ContainerColumn>
            </ContainerColumn>
          )}
        </ContainerRow>
      </ContainerColumn>
    </ContainerRow>
  )
}

export default CrossFeaturing
