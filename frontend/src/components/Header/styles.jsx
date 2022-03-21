import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../utils/styles/colors'

export const NavContainer = styled.nav`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  background-color: #2704c4;
  color: white;
`
export const LinkText = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: #ffd222;
  }
`
export const PageText = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
`

export const PageTextBis = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  color: ${colors.yellow};
`
