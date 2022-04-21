import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../utils/styles/colors'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  left: 0;
  top: 0;
  background-image: linear-gradient(
      112.5deg,
      rgb(214, 214, 214) 0%,
      rgb(214, 214, 214) 10%,
      rgb(195, 195, 195) 10%,
      rgb(195, 195, 195) 53%,
      rgb(176, 176, 176) 53%,
      rgb(176, 176, 176) 55%,
      rgb(157, 157, 157) 55%,
      rgb(157, 157, 157) 60%,
      rgb(137, 137, 137) 60%,
      rgb(137, 137, 137) 88%,
      rgb(118, 118, 118) 88%,
      rgb(118, 118, 118) 91%,
      rgb(99, 99, 99) 91%,
      rgb(99, 99, 99) 100%
    ),
    linear-gradient(
      157.5deg,
      rgb(214, 214, 214) 0%,
      rgb(214, 214, 214) 10%,
      rgb(195, 195, 195) 10%,
      rgb(195, 195, 195) 53%,
      rgb(176, 176, 176) 53%,
      rgb(176, 176, 176) 55%,
      rgb(157, 157, 157) 55%,
      rgb(157, 157, 157) 60%,
      rgb(137, 137, 137) 60%,
      rgb(137, 137, 137) 88%,
      rgb(118, 118, 118) 88%,
      rgb(118, 118, 118) 91%,
      rgb(99, 99, 99) 91%,
      rgb(99, 99, 99) 100%
    ),
    linear-gradient(
      135deg,
      rgb(214, 214, 214) 0%,
      rgb(214, 214, 214) 10%,
      rgb(195, 195, 195) 10%,
      rgb(195, 195, 195) 53%,
      rgb(176, 176, 176) 53%,
      rgb(176, 176, 176) 55%,
      rgb(157, 157, 157) 55%,
      rgb(157, 157, 157) 60%,
      rgb(137, 137, 137) 60%,
      rgb(137, 137, 137) 88%,
      rgb(118, 118, 118) 88%,
      rgb(118, 118, 118) 91%,
      rgb(99, 99, 99) 91%,
      rgb(99, 99, 99) 100%
    ),
    linear-gradient(90deg, rgb(195, 195, 195), rgb(228, 228, 228));
  background-blend-mode: overlay, overlay, overlay, normal;
  @media screen and (min-width: 300px) and (max-width: 600px) {
    flex-direction: column;
  }
`
export const GamesPicked = styled.div`
  width: 25%;
  background-color: #2704c4;
  box-shadow: 5px 5px rgba(0, 0, 255, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 300px) and (max-width: 600px) {
    width: 100%;
  }
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
  @media screen and (min-width: 300px) and (max-width: 600px) {
    height: 3%;
  }
`
export const GamesPickedTitle = styled.div`
  color: white;
  font-size: 20px;
  font-weight: bold;
  @media screen and (min-width: 300px) and (max-width: 600px) {
    font-size: 16px;
    text-align: center;
  }
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
  @media screen and (min-width: 300px) and (max-width: 600px) {
    width: 50%;
    height: 5%;
    border-radius: 10px;
    font-size: 8px;
    padding: 2%;
    margin-top: 4%;
  }
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
  @media screen and (min-width: 300px) and (max-width: 600px) {
    font-size: 12px;
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
  @media screen and (min-width: 300px) and (max-width: 600px) {
    font-size: 16px;
    text-align: center;
    height: 3%;
    margin-top: 4%;
  }
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
  @media screen and (min-width: 300px) and (max-width: 600px) {
    font-size: 24px;
  }
  @media screen and (min-width: 600px) and (max-width: 800px) {
    font-size: 36px;
  }
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
  @media screen and (min-width: 300px) and (max-width: 600px) {
    font-size: 12px;
  }
`

export const TextH1 = styled.h1`
  font-family: 'Montserrat';
  text-align: center;
  font-size: 24px;
  @media screen and (min-width: 300px) and (max-width: 600px) {
    font-size: 18px;
  }
`
export const GameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-bottom: 20px;
`
