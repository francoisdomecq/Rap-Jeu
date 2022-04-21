import { useState, useEffect } from 'react'
import {
  Container,
  Table,
  TableHead,
  TableBody,
  Line,
  LineContainer,
  QuestionTheme,
  TableContainer,
  TableBottom,
} from './styles'
import { TextBlue } from '../../utils/styles/Text'

import { LoaderWrapper, Loader } from '../../utils/styles/Atoms'

import Redbull from '../../assets/PNG/redbull.png'

//Ce composant permet d'afficher le tableau des thèmes pour les épreuves TOP 5 et Les enchères
function Theme({ selectTheme, page, chosenTheme }) {
  const [isDataLoading, setDataLoading] = useState(true)
  const [theme, setTheme] = useState([])

  //Cette fonction permet d'afficher les thèmes dans le tableau
  function displayThemes() {
    return theme.map((theme) => (
      <LineContainer key={theme._id}>
        <Line isChosen={theme === chosenTheme ? true : false}>
          <QuestionTheme onClick={() => selectTheme(theme)}>
            {theme.theme}
          </QuestionTheme>
        </Line>
      </LineContainer>
    ))
  }

  useEffect(() => {
    //On effectue le call API pour récupérer les données. L'adresse est modifiée en fonction de la page sur laquelle l'utilisateur se trouve
    fetch(`https://rapjeu-backend.herokuapp.com/api/${page}`)
      .then((response) => response.json())
      .then((requestData) => {
        //On ajoute les données récupérées dans le tableau theme
        setTheme(requestData)
        //On dit que les données ont chargé pour arrêter d'afficher le loader
        setDataLoading(false)
      })
      .catch((error) => console.log(error))
  }, [page])

  return isDataLoading ? (
    //Si les données chargent, on affiche le loader
    <LoaderWrapper>
      <Loader src={Redbull} />
    </LoaderWrapper>
  ) : (
    <Container>
      <TableHead>
        <TextBlue>Choisir un theme</TextBlue>
      </TableHead>
      <TableContainer>
        <Table>
          <TableBody>{displayThemes()}</TableBody>
        </Table>
      </TableContainer>
      <TableBottom />
    </Container>
  )
}

export default Theme
