import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../utils/styles/colors'

export const NavContainer = styled.nav`
  padding: 20px;
  display: flex;
  align-items: center;
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
  font-weight: 700;
  font-size: 18px;

`

export const PageTextBis = styled.span`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 24px;
  line-height: 22px;
  background: linear-gradient(180deg, #fefbeb 0%, #bdbaa2 100%);
  background-size: 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const Logo = styled.img`
  width: 5%;
`
