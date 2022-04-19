import styled from 'styled-components'

export const NavContainer = styled.nav`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2704c4;
  color: white;
  @media screen and (min-width: 300px) and (max-width: 600px) {
    padding: 10px;
  }
`
export const PageText = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 18px;
  @media screen and (min-width: 300px) and (max-width: 600px) {
    font-size: 6px;
  }
  @media screen and (min-width: 600px) and (max-width: 900px) {
    font-size: 12px;
  }
`

export const PageTextBis = styled.span`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 24px;
  background: linear-gradient(180deg, #fefbeb 0%, #bdbaa2 100%);
  background-size: 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media screen and (min-width: 300px) and (max-width: 600px) {
    font-size: 10px;
  }
  @media screen and (min-width: 600px) and (max-width: 900px) {
    font-size: 16px;
  }
`
export const Logo = styled.img`
  width: 24px;
  height: 24px;
  &:hover {
    cursor: pointer;
  }
  @media screen and (min-width: 300px) and (max-width: 900px) {
    width: 18px;
    height: 18px;
  }
`
