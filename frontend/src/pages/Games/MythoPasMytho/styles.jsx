import styled from 'styled-components'
import QuestionContainer from '../../../assets/mythoPasMytho/questionContainer.svg'
import AnswerButton from '../../../assets/mythoPasMytho/answerButton.svg'
import AnswerContainer from '../../../assets/mythoPasMytho/answerContainer.svg'
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
export const ButtonAnswer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 80px;
  background-size: contain;
  background-image: url(${AnswerButton});
  background-repeat: no-repeat;
  &:hover {
    cursor: pointer;
  }
`

export const ContainerAnswer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1100px;
  height: 160px;
  background-size: contain;
  background-image: url(${AnswerContainer});
  background-repeat: no-repeat;
  &:hover {
    cursor: pointer;
  }
`
