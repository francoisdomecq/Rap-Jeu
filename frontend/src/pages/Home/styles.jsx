import styled from 'styled-components'
import Continuer from '../../assets/continuer.svg'
export const ContainerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
`

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
  width: 5%;
  height: 5%;
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
  width: 70%;
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
