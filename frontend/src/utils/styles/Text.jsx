import styled from 'styled-components'
import colors from './colors'

export const TextBlack = styled.p`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 24px;
  font-size: ${({ size }) => (size ? `${size}px` : '24px')};
  @media screen and (min-width: 300px) and (max-width: 650px) {
    font-size: 12px;
  }
  @media screen and (min-width: 650px) and (max-width: 900px) {
    font-size: 18px;
  }
`

export const TextWhite = styled.p`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: ${({ size }) => (size ? `${size}px` : '24px')};
  color: white;
  @media screen and (min-width: 300px) and (max-width: 650px) {
    font-size: 12px;
  }
  @media screen and (min-width: 650px) and (max-width: 900px) {
    font-size: 18px;
  }
`

export const TextBlue = styled.p`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: ${({ size }) => (size ? `${size}px` : '24px')};
  color: ${colors.blue};
  @media screen and (min-width: 300px) and (max-width: 650px) {
    font-size: 12px;
  }
  @media screen and (min-width: 650px) and (max-width: 900px) {
    font-size: 18px;
  }
`
