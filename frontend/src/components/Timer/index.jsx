import { ContainerTimer, Time } from './styles'

//Ce composant est utilisé dans les épreuves TOP 5 et les enchères pour afficher le chronomètre
function Timer({ counter }) {
  return (
    <ContainerTimer>
      <Time>
        {/*Si le chrono passe en dessous de 10s, on rajoute un 0 pour que le texte reste centré*/}
        00:{counter < 10 ? '0' : null}
        {counter}
      </Time>
    </ContainerTimer>
  )
}

export default Timer
