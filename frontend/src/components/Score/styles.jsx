import styled from 'styled-components'
import rectangle from '../../assets/rectangle.svg'

export const ContainerScoreTeam1 = styled.div`
  position: absolute;
  top: 35%;
  left: 8%;
  display: flex;
  justify-content: flex-start;
  width: 189px;
  height: 90px;
  background-size: contain;
  background-image: url(${rectangle});
  background-repeat: no-repeat;
`
export const ContainerScoreTeam2 = styled.div`
  position: absolute;
  top: 35%;
  right: 8%;
  display: flex;
  justify-content: flex-start;
  width: 189px;
  height: 90px;
  background-size: contain;
  background-image: url(${rectangle});
  background-repeat: no-repeat;
`

export const ButtonScore = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  ::placeholder {
    color: white;
  }
`
