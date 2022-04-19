import styled from 'styled-components'
import colors from '../../utils/styles/colors'

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1%;
  padding-bottom: 2%;
  margin-top: 3%;
  width: 28%;
  border-radius: 30px;
  background-color: ${colors.blue};
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.6);
  opacity: ${({ isFavorite }) => (isFavorite ? '0.4' : '1')};
  &:hover {
    cursor: pointer;
    opacity: ${({ isFavorite }) => (isFavorite ? '0.2' : '0.9')};
  }
  @media screen and (min-width: 300px) and (max-width: 1300px) {
    width: 42%;
    border-radius: 15px;
  }
`

export const CardTitleWrapper = styled.div`
  background: ${colors.red};
  box-shadow: 2px 5px 2px 1px black;
  width: 100%;
  padding: 1%;
  border-radius: 20px;
  text-align: center;
  margin-top: 1%;
  @media screen and (min-width: 300px) and (max-width: 1300px) {
    width: 95%;
    border-radius: 10px;
  }
`
export const CardTitle = styled.span`
  color: white;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
  @media screen and (min-width: 300px) and (max-width: 600px) {
    font-size: 10px;
  }
  @media screen and (min-width: 600px) and (max-width: 1300px) {
    font-size: 18px;
  }
`

export const CardRulesWrapper = styled.div`
  background: ${colors.yellow};
  box-shadow: 5px 5px 2px 1px black;
  width: 95%;
  border-radius: 30px;
  padding: 10px;
  margin-top: 20px;
  @media screen and (min-width: 300px) and (max-width: 600px) {
    padding: 2px;
    border-radius: 10px;
    box-shadow: 1px 1px 1px 1px black;
  }
  @media screen and (min-width: 600px) and (max-width: 1300px) {
    padding: 5px;
    border-radius: 15px;
    box-shadow: 5px 5px 5px 1px black;
  }
`
export const CardRules = styled.p`
  color: #2704c4;
  font-size: 16px;
  font-family: 'Montserrat';
  font-weight: 500;
  @media screen and (min-width: 300px) and (max-width: 600px) {
    font-size: 8px;
  }
  @media screen and (min-width: 600px) and (max-width: 1300px) {
    font-size: 12px;
  }
`
export const CardRound = styled.p`
  color: #2704c4;
  font-size: 18px;
  font-weight: 700;
  font-family: 'Montserrat';
  text-align: center;
  @media screen and (min-width: 300px) and (max-width: 600px) {
    font-size: 8px;
  }
  @media screen and (min-width: 600px) and (max-width: 1300px) {
    font-size: 12px;
  }
`
