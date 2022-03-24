import { useContext, useState } from 'react'
import { TeamContext } from '../../../utils/context'
import RappeurArray from '../../../components/Rappers'
import Score from '../../../components/Score'
import {
  RappeurContainer,
  SecondContainer,
  InputContainer,
  SearchContainer,
} from './styles'
import { ContainerRow, ContainerColumn } from '../../../utils/styles/balises'

import MusicBrainzLogo from '../../../assets/PNG/MusicBrainz_Logo.png'
import YoutubeLogo from '../../../assets/icons8-youtube.svg'
import RapGeniusLogo from '../../../assets/PNG/RapGenius_Logo.png'

import '../../../utils/animations/Bouncing/rollandGamosBouncingLetters.css'
import '../../../utils/animations/Bouncing/animationBouncing.css'

import HasGameStarted from '../../../utils/functions/hasGameStarted'

function RollandGamos() {
  const [rappeur, setRappeur] = useState('')
  const [count, setCount] = useState(0)
  const [rappeur1Search, setRappeur1Search] = useState('')
  const [rappeur2Search, setRappeur2Search] = useState('')
  const { scoreTeam1, scoreTeam2 } = useContext(TeamContext)

  function selectRappeur(rappeur) {
    setRappeur(rappeur)
    setRappeur1Search(rappeur)
  }

  function newRappeur() {
    setRappeur('')
    setCount(count + 1)
  }

  // HasGameStarted()

  return count < 3 ? (
    <ContainerRow>
      <div className="bouncing-text">
        <div className="r-RG">R</div>
        <div className="o-RG">O</div>
        <div className="l-RG">L</div>
        <div className="l2-RG">L</div>
        <div className="a-RG">A</div>
        <div className="n-RG">N</div>
        <div className="d-RG">D</div>
        <p style={{ color: 'transparent', lineHeight: 0 }}>''</p>
        <div className="g-RG">G</div>
        <div className="a2-RG">A</div>
        <div className="m-RG">M</div>
        <div className="o2-RG">O</div>
        <div className="s-RG">S</div>
      </div>
      <ContainerColumn>
        <ContainerRow>
          <Score team={'team1'} placeHolder="---" value={null} />
          {rappeur ? (
            <SecondContainer>
              <RappeurContainer>
                <input
                  placeHolder={rappeur1Search}
                  onChange={(e) => setRappeur1Search(e.target.value)}
                />
                <p style={{ color: 'white', textTransform: 'uppercase' }}>
                  {rappeur1Search}
                </p>
              </RappeurContainer>
              <p>Un doute sur le featuring ? </p>
              <InputContainer>
                <input
                  type="text"
                  placeholder={rappeur1Search}
                  value={rappeur1Search}
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
              </SearchContainer>
              <button onClick={() => newRappeur()}>
                Passer à la manche suivante
              </button>
            </SecondContainer>
          ) : (
            <SecondContainer>
              <p>Manche n°{count + 1}</p>
              <RappeurArray page="rappeur" selectRapper={selectRappeur} />
            </SecondContainer>
          )}
          <Score team={'team2'} placeHolder="---" value={null} />
        </ContainerRow>
      </ContainerColumn>
    </ContainerRow>
  ) : (
    <ContainerRow>
      <p>Bien joué équipe {scoreTeam1 < scoreTeam2 ? '2' : '1'} </p>
    </ContainerRow>
  )
}

export default RollandGamos
