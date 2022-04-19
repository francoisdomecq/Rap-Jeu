import { Container, ContainerRow, ContainerButton } from './styles'
import { TextWhite, TextBlue, TextBlack } from '../../utils/styles/Text'

//Ce composant est utilisé dans les épreuves TOP 5 et les enchères.
//Il permet de faire le compte des réponses données par les joueurs
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
          {/*Cette portion de code ne s'affiche que pour l'épreuve TOP5. Lorsque le compteur passe en dessous des 10 secondes,
           un message s'affiche pour signaler à l'autre équipe de se préparer à reprendre la main.*/}
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
