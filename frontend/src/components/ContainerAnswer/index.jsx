import { Container, ContainerRow, ContainerButton } from './styles'
import { TextWhite, TextBlue, TextBlack } from '../../utils/styles/Text'
function ContainerAnswer({
  teamAnswering,
  team1,
  team2,
  counter,
  answerGiven,
  setAnswerGiven,
  trialNumber,
  answerNumberToGive,
}) {
  return (
    <Container>
      <TextBlue>
        {teamAnswering}, à vous de jouer !<br />
        <TextBlack size={12}>
          {counter <= 10 && trialNumber === 0
            ? teamAnswering === team1
              ? `${team2} préparez-vous, vous reprenez la main dans ${counter} secondes !`
              : `${team1} préparez-vous, vous reprenez la main dans ${counter} secondes !`
            : null}
        </TextBlack>
        <br />
        Nombre de bonnes réponses : {answerGiven} ({answerNumberToGive})
      </TextBlue>
      <ContainerRow style={{ width: '70%' }}>
        <ContainerButton onClick={() => setAnswerGiven(answerGiven - 1)}>
          <TextWhite>-1</TextWhite>
        </ContainerButton>
        <ContainerButton onClick={() => setAnswerGiven(answerGiven + 1)}>
          <TextWhite>+1</TextWhite>
        </ContainerButton>
      </ContainerRow>
    </Container>
  )
}
export default ContainerAnswer
