import styled from 'styled-components'
import colors from '../../../utils/styles/colors'
import Continuer from '../../../assets/continuer.svg'

export const ContainerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
`
export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`
export const ContainerColumn45 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 45%;
  height: 100%;
  margin-bottom: 2%;
`

export const NextRoundButton = styled.button`
  background-color: ${colors.red};
  font-family: 'Montserrat', 'sans-serif';
  font-size: 24px;
  font-weight: 700;
  width: 45%;
  border-radius: 20px;
  color: white;
  &:hover {
    cursor: pointer;
  }
`

export const ContainerTeam = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 45%;
  background: linear-gradient(90deg, #15008d 0%, #198bf5 100%);
  border-radius: 10px;
  opacity: ${({ isSelected }) => (isSelected ? '0.4' : '1')};
  &:hover {
    cursor: pointer;
  }
`

export const ContainerTeamSelection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2%;
  padding: 1%;
  width: 100%;
  border-radius: 20px;
  background: rgb(255, 255, 24);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 24, 1) 0%,
    rgba(255, 210, 34, 1) 100%
  );
  opacity: 1;
`

export const ContinuerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url(${Continuer});
  background-repeat: no-repeat;
  background-size: contain;
  width: 326px;
  height: 105px;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Montserrat';
  color: white;
  &:hover {
    cursor: pointer;
  }
  padding-right: 1%;
  opacity: ${({ isClickable }) => (isClickable ? 1 : 0.6)};
`
export const ContainerCrossFeaturing = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(255, 255, 24);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 24, 1) 0%,
    rgba(255, 210, 34, 1) 100%
  );
  padding: 1%;
  border-radius: 20px;
  width: 60%;
  opacity:0.95;
`
