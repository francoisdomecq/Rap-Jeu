import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../utils/styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`
export const GamesPicked = styled.div`
  width: 25%;
  background-color: #2704c4;
  box-shadow: 5px 5px rgba(0, 0, 255, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
export const GamesPickedTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #db0a40;
  width: 100%;
  height: 6%;
  font-family: 'Montserrat';
  font-weight: 700;
`
export const GamesPickedTitle = styled.div`
  color: white;
  font-size: 20px;
  font-weight: bold;
`
export const GamesPickedWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  justify-content: center;
  background: rgba(250, 255, 0, 1);
  box-shadow: 5px 5px 2px 1px black;
  border-radius: 20px;
  width: 80%;
  height: 10%;
  color: #2704c4;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  font-family: 'Montserrat';
`
export const RemoveButton = styled.button`
  width: 30px;
  background: rgba(255, 0, 61, 1);
  border-radius: 360px;
  color: white;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`
export const PlayButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6%;
  background-color: ${({ has4games }) =>
    has4games === 'true' ? '#db0a40' : 'grey'};
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-family: 'Montserrat';
  font-weight: 700;
`
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
export const PageTitle = styled.p`
  font-family: 'Montserrat';
  font-weight: 700;
  text-align: center;
  font-size: 60px;
  line-height: 0px;
  color: ${colors.red};
  text-transform: uppercase;
  text-shadow: 1px 1px 2px black;
`
export const ExplainContainer = styled.div`
  background-color: white;
  border: 3px solid black;
  border-radius: 20px;
  width: 80%;
  padding: 2%;
  padding-top: 0%;
  text-align: start;
`

export const Text = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 16px;
`

export const TextH1 = styled.h1`
  font-family: 'Montserrat';
  text-align: center;
  font-size: 24px;
`
export const GameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-bottom: 20px;
`
