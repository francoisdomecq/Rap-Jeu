import { useState, useEffect } from 'react'
import {
  Container,
  Table,
  TableHead,
  TableBody,
  Line,
  LineContainer,
  QuestionTheme ,
  TableContainer,
  TableBottom,
} from './styles'


function Theme({ selectTheme, page, chosenTheme }) {
  const [theme, setTheme] = useState([])

  function displayThemes() {
    return theme.map((theme) => (
      <LineContainer>
        <Line isChosen={theme === chosenTheme ? true : false}>
          <QuestionTheme key={theme._id} onClick={() => selectTheme(theme)}>
            {theme.theme}
          </QuestionTheme>
        </Line>
      </LineContainer>
    ))
  }

  useEffect(() => {
    fetch(`http://localhost:3001/api/${page}`)
      .then((response) => response.json())
      .then((requestData) => {
        setTheme(requestData)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <Container>
      <TableHead>
        <th>
          <p>Choisir un theme</p>
        </th>
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
