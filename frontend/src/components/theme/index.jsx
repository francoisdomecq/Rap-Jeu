import { useState, useEffect } from 'react'
import {
  Container,
  Table,
  TableHead,
  TableBody,
  Line,
  LineContainer,
} from './styles'

function Theme({ selectTheme,page }) {
  const [theme, setTheme] = useState([])

  function displayThemes() {
    return theme.map((theme) => (
      <LineContainer>
        <Line>
          <p key={theme._id} onClick={() => selectTheme(theme)}>
            {theme.theme}
          </p>
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
      <Table>
        <TableHead>
          <th>Choisir un theme</th>
        </TableHead>
        <TableBody>{displayThemes()}</TableBody>
      </Table>
    </Container>
  )
}

export default Theme
