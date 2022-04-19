import styled from 'styled-components'
import colors from '../../utils/styles/colors'

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
  width: 1000px;
  justify-content: space-between;
`
export const QuestionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
`

export const ExplainContainer = styled.div`
  background-color: white;
  border: 3px solid black;
  border-radius: 20px;
  width: 70%;
  padding: 2%;
  padding-top: 0%;
  text-align: start;
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
