import styled from 'styled-components'
import colors from '../../../utils/styles/colors'

import Continuer from '../../../assets/continuer.svg'

export const ContainerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
`
export const ContainerColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  width: 100%;
`
export const ContainerTeam = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 45%;
  opacity: ${({ isSelected }) => (isSelected ? 0.5 : 1)};
  background: linear-gradient(90deg, #15008d 0%, #198bf5 100%);
  &:hover {
    cursor: pointer;
  }
`
export const NextRoundButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url(${Continuer});
  background-repeat: no-repeat;
  background-size: contain;
  width: 326px;
  height: 105px;
  &:hover {
    cursor: pointer;
  }
  padding-right: 1%;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 35%;

  border-radius: 20px;
  padding: 0% 0% 1% 0%;
  background: rgb(255, 255, 24);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 24, 1) 0%,
    rgba(255, 210, 34, 1) 100%
  );
  opacity: 0.95;
  box-shadow: 1px 1px 1px ${colors.blue};
`
