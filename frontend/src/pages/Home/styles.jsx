import styled from 'styled-components'
import Rectangle from '../../assets/rectangleAccueil.svg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SecondContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 1%;
`
export const LinkImage = styled.a`
  width: 10%;
  height: 10%;
`
export const JouerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 30%;
`
export const Logo = styled.img`
  width: 100%;
  height: 100%;
`
export const ExplicationsContainer = styled.div`
  display: flex;
  margin-top: 1%;
  justify-content: center;
`
export const Explications = styled.div`
  background-color: white;
  border: 3px solid black;
  border-radius: 20px;
  width: 50%;
  padding: 2%;
  padding-top: 0%;
  text-align: start;
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
