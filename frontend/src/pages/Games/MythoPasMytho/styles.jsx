import styled from 'styled-components'
import QuestionContainer from '../../../assets/mythoPasMytho/questionContainer.svg'
import AnswerContainer from '../../../assets/mythoPasMytho/answerButton.svg'

export const Text = styled.p`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 24px;
`
export const ContainerQuestion = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 1200px;
  height: 100px;
  background-size: contain;
  background-image: url(${QuestionContainer});
  background-repeat: no-repeat;
`
export const ContainerAnswer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 80px;
  background-size: contain;
  background-image: url(${AnswerContainer});
  background-repeat: no-repeat;
  &:hover {
    cursor: pointer;
  }
`
