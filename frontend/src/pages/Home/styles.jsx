import styled from 'styled-components'
import Rectangle from '../../assets/rectangleAccueil.svg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const JouerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 30%;
`
export const LogoJouer = styled.img`
  width: 100%;
  height: 100%;
`
export const ExplicationsContainer = styled.div`
  display: flex;
`
export const Explications = styled.div`
  width: 589px;
  height: 370px;
  padding: 20px;
  background-size: contain;
  background-image: url(${Rectangle});
  background-repeat: no-repeat;
  color: white;
`

export const Text = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
`

export const TextH1 = styled.h1`
  font-family: 'Montserrat';
  text-align: center;
  
`
