import { useEffect, useState } from 'react'

import {
  SearchContainer,
  InputContainer,
  SearchInput,
  SearchLogos,
  Image,
} from './styles'
import { TextBlue } from '../../utils/styles/Text'

import MusicBrainzLogo from '../../assets/rollandgamos/MusicBrainz_Logo.png'
import YoutubeLogo from '../../assets/rollandgamos/icons8-youtube.svg'
import RapGeniusLogo from '../../assets/rollandgamos/RapGenius_Logo.png'

//Ce composant est utilisé dans les épreuves Rolland Gamos et CrossFeaturing. Il permet d'effectuer une recherche d'un featuring
//sur Youtube, RapGenius et MusicBrainz
function SearchFeaturing(rapper) {
  const [rapper1Search, setrapper1Search] = useState('')
  const [rapper2Search, setrapper2Search] = useState('')

  //Si le rapper passé en props est modifié, alors on modifie champ de recherche rapper1Search
  useEffect(() => {
    if (rapper) setrapper1Search(rapper.rapper)
  }, [rapper])

  return (
    <SearchContainer>
      <TextBlue>Un doute sur un featuring ? </TextBlue>
      <InputContainer>
        <SearchInput
          type="search"
          placeholder={rapper1Search}
          value={rapper1Search}
          onClick={() => setrapper1Search('')}
          onChange={(e) => setrapper1Search(e.target.value)}
        />
        <SearchInput
          type="search"
          value={rapper2Search}
          onClick={() => setrapper2Search('')}
          onChange={(e) => setrapper2Search(e.target.value)}
        />
      </InputContainer>
      <SearchLogos>
        <a
          rel="noreferrer"
          href={`https://www.youtube.com/results?search_query=${rapper1Search}+${rapper2Search}`}
          target="_blank"
        >
          <Image src={YoutubeLogo} alt="Chercher sur youtube" />
        </a>
        <a
          rel="noreferrer"
          href={`https://musicbrainz.org/search?query=${rapper1Search}%20feat.%20${rapper2Search}&type=recording&limit=10&method=advanced`}
          target="_blank"
        >
          <Image src={MusicBrainzLogo} alt="Chercher sur MusicBrainz" />
        </a>
        <a
          rel="noreferrer"
          href={`https://genius.com/search?q=${rapper1Search}%20${rapper2Search}`}
          target="_blank"
        >
          <Image src={RapGeniusLogo} alt="Chercher sur RapGenius" />
        </a>
      </SearchLogos>
    </SearchContainer>
  )
}
export default SearchFeaturing
