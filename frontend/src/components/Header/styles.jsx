import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavContainer = styled.nav`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
