import styled from 'styled-components'
import colors from '../../../utils/styles/colors'
import QuestionContainer from '../../../assets/mythoPasMytho/questionContainer.svg'


import Continuer from '../../../assets/continuer.svg'
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
  margin-top: ${({ isAnswerGiven }) => (isAnswerGiven ? '1%' : '11%')};
`
export const ButtonAnswer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  width: 30%;
  border: solid 2px ${colors.yellow};
  background: linear-gradient(180deg, #15008d 0%, #198bf5 100%);
  &:hover {
    cursor: pointer;
  }
`

export const ContainerAnswer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;

  border-radius: 20px;
  opacity: 0.95;
  width: 50%;
`
export const ContinuerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url(${Continuer});
  background-repeat: no-repeat;
  background-size: contain;
  width: 326px;
  height: 105px;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Montserrat';
  color: white;
  &:hover {
    cursor: pointer;
  }
  padding-right: 1%;
`
