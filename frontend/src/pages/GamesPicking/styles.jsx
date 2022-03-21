import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../utils/styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`
export const GameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-bottom: 20px;
`
export const GamesPicked = styled.div`
  width: 100%;
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
  font-weight: bold;
  font-family: 'Montserrat';
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

export const ExplainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  font-family: 'Montserrat';
`
export const PageTitle = styled.p`
  font-family: 'Montserrat';
  font-weight: 700;
  text-align: center;
  font-size: 60px;
  line-height: 0px;
  color: ${colors.red};
  text-transform: uppercase;
`
