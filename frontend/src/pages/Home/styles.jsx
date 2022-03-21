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
  height: 343px;
  padding: 20px;
  background-size: contain;
  background-image: url(${Rectangle});
  background-repeat: no-repeat;
  color: white;
`
export const P = styled.p`
/* 0 points */




text-transform: uppercase;

font-weight: 700;
font-size: 50px;


/* identical to box height */


background: linear-gradient(180deg, #FEFBEB 0%, #BDBAA2 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;

-webkit-text-stroke: 1px #000000;

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);`