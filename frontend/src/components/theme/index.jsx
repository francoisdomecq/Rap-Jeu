import { useState, useEffect } from 'react'
import {
  Container,
  Table,
  TableHead,
  TableBody,
  Line,
  LineContainer,
  RapperName,
  TableContainer,
  TableBottom,
} from './styles'

function Theme({ selectTheme, page }) {
  const [theme, setTheme] = useState([])

  function displayThemes() {
    return theme.map((theme) => (
      <LineContainer>
        <Line>
          <RapperName key={theme._id} onClick={() => selectTheme(theme)}>
            {theme.theme}
          </RapperName>
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
        <th>Choisir un theme</th>
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
