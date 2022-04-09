import { useEffect, useState } from 'react'

import {
  SearchContainer,
  InputContainer,
  SearchInput,
  SearchLogos,
} from './styles'
import { TextBlue } from '../../utils/styles/Text'
import MusicBrainzLogo from '../../assets/rollandgamos/MusicBrainz_Logo.png'
import YoutubeLogo from '../../assets/rollandgamos/icons8-youtube.svg'
import RapGeniusLogo from '../../assets/rollandgamos/RapGenius_Logo.png'

function SearchFeaturing(rappeur) {
  const [rappeur1Search, setRappeur1Search] = useState('')
  const [rappeur2Search, setRappeur2Search] = useState('')

  useEffect(() => {
    if (rappeur) setRappeur1Search(rappeur.rappeur)
  },[rappeur])

  return (
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
  )
}
export default SearchFeaturing
