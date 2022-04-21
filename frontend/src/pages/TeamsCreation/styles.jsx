import styled from 'styled-components'
import colors from '../../utils/styles/colors'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  width: 100%;
  padding-bottom: 5vw;
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
`

export const ContainerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`
export const ContainerColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`
export const ContainerTeam = styled.div`
  display: flex;
  justify-content: space-between;
`
export const QuestionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 40px;
  padding-right: 20px;
  padding-left: 20px;
  height: 50px;
  border-radius: 15px;
  background: linear-gradient(90deg, #15008d 0%, #198bf5 100%);
  font-family: 'Montserrat';
  font-size: 20px;
  font-weight: 700;
  color: white;
  @media screen and (min-width: 300px) and (max-width: 550px) {
    font-size: 12px;
  }
`
export const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  font-family: 'Montserrat';
  font-size: 24px;
  font-weight: 700;
  width: 35%;
  background: linear-gradient(90deg, #15008d 0%, #198bf5 100%);
  color: white;
  border-radius: 20px;
  padding-bottom: 20px;
  @media screen and (min-width: 300px) and (max-width: 550px) {
    font-size: 12px;
    padding: 3%;
  }
`
export const TeamName = styled.input`
  display: flex;
  align-items: center;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  border-radius: 20px;
  width: 90%;
  height: 100%;
  font-size: 32px;
  background-color: ${colors.yellow};
  color: ${colors.blue};
  @media screen and (min-width: 300px) and (max-width: 550px) {
    font-size: 12px;
  }
`
export const ExplainContainer = styled.div`
  background-color: white;
  border: 3px solid black;
  border-radius: 20px;
  width: 70%;
  padding: 2%;
  padding-top: 0%;
  text-align: start;
  @media screen and (min-width: 300px) and (max-width: 550px) {
    width: 90%;
  }
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
  @media screen and (min-width: 300px) and (max-width: 500px) {
    font-size: 24px;
  }
  @media screen and (min-width: 500px) and (max-width: 800px) {
    font-size: 36px;
  }
`
export const Text = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 16px;
  @media screen and (min-width: 300px) and (max-width: 550px) {
    font-size: 12px;
  }
`
export const TextH1 = styled.h1`
  font-family: 'Montserrat';
  text-align: center;
  font-size: 24px;
  @media screen and (min-width: 300px) and (max-width: 550px) {
    font-size: 18px;
  }
`
