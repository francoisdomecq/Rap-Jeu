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
`

export const CardTitleWrapper = styled.div`
  background: ${colors.red};
  box-shadow: 2px 5px 2px 1px black;
  width: 100%;
  padding: 1%;
  border-radius: 20px;
  text-align: center;
  margin-top: 1%;
`
export const CardTitle = styled.span`
  color: white;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
`

export const CardRulesWrapper = styled.div`
  background: ${colors.yellow};
  box-shadow: 5px 5px 2px 1px black;
  font-size: 22px;
  width: 95%;

  border-radius: 30px;
  padding: 10px;
  margin-top: 20px;
`

export const CardRules = styled.p`
  color: #2704c4;
  font-size: 16px;
  font-family: 'Montserrat';
  font-size: '20px';
  font-weight: 500;
`
export const CardRound = styled.p`
  color: #2704c4;
  font-size: 18px;
  font-weight: 700;
  font-family: 'Montserrat';
  text-align: center;
`
