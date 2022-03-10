import styled from 'styled-components'
import colors from '../../utils/styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
  border-radius: 30px;
  background-color: ${colors.red};
  font-size: 20px;
  font-weight: bold;
  color: white;
`
export const TeamWrapper = styled.div`
  width: 350px;
  background-color: ${colors.blue};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: white;
  border-radius: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 20px;
`
export const TeamName = styled.input`
  display: flex;
  border-radius: 20px;
  width: 300px;
  height: 40px;
  font-size: 18px;
  background-color: ${colors.yellow};
  color: ${colors.blue};
  align-items: center;
  text-center: align;
`

export const LoaderWrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LogoJouer = styled.img`
  width: 100%;
  height: 100%;
  margin-top: 50px;
`

export const ExplainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`