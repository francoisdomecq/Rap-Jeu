import { ContainerTimer, Time } from './styles'

function Timer({ counter }) {
  return (
    <ContainerTimer>
      <Time>
        00:{counter < 10 ? '0' : null}
        {counter}
      </Time>
    </ContainerTimer>
  )
}

export default Timer
