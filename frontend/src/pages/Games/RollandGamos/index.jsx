import { useContext, useState } from 'react'
import RappeurArray from '../../../components/Rappers'
import Score from '../../../components/Score'
import {
  Container,
  RappeurContainer,
  SecondContainer,
  InputContainer,
  SearchContainer,
} from './styles'
import MusicBrainzLogo from '../../../assets/MusicBrainz_Logo.png'
import YoutubeLogo from '../../../assets/YoutubeLogo.svg'
import RapGeniusLogo from '../../../assets/RapGenius_Logo.png'
import { TeamContext } from '../../../utils/context'
import HasGameStarted from '../../../utils/functions/hasGameStarted'

function RollandGamos() {
  const [rappeur, setRappeur] = useState('')
  const [count, setCount] = useState(0)
  const [rappeur1Search, setRappeur1Search] = useState('')
  const [rappeur2Search, setRappeur2Search] = useState('')
  const { scoreTeam1, scoreTeam2 } = useContext(TeamContext)

  function selectRappeur(rappeur) {
    setRappeur(rappeur)
  }

  function newRappeur() {
    setRappeur('')
    setCount(count + 1)
  }

  HasGameStarted()

  return count < 3 ? (
    <Container>
      <Score team={'team1'} placeHolder="---" value={null} />
      {rappeur ? (
        <SecondContainer>
          <RappeurContainer>
            <p style={{ color: 'white', fontWeight: 'bold' }}>Rappeur choisi</p>
            <p style={{ color: 'white', textTransform: 'uppercase' }}>
              {rappeur}
            </p>
          </RappeurContainer>
          <InputContainer>
            <input
              type="text"
              placeholder="rappeur 1"
              onChange={(e) => setRappeur1Search(e.target.value)}
            />
            <input
              type="text"
              placeholder="rappeur 2"
              onChange={(e) => setRappeur2Search(e.target.value)}
            />
          </InputContainer>
          <SearchContainer>
            <a
              rel="noreferrer"
              href={`https://www.youtube.com/results?search_query=${rappeur1Search}+${rappeur2Search}`}
              target="_blank"
            >
              <img src={YoutubeLogo} alt="Chercher sur youtube" />
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
          </SearchContainer>
          <button onClick={() => newRappeur()}>
            Passer à la manche suivante
          </button>
        </SecondContainer>
      ) : (
        <SecondContainer>
          <p>Manche n°{count + 1}</p>
          <RappeurArray selectRapper={selectRappeur} />
        </SecondContainer>
      )}
      <Score team={'team2'} placeHolder="---" value={null} />
    </Container>
  ) : (
    <Container>
      <p>Bien joué équipe {scoreTeam1 < scoreTeam2 ? '2' : '1'} </p>
    </Container>
  )
}

export default RollandGamos
