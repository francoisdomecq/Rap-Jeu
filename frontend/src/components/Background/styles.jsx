import styled from 'styled-components'

export const ContainerZIndex = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  left: 0;
  top: 0;
  
`
export const ContainerRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-width: 300px) and (max-width: 500px) {
    justify-content: center;
  }
`
export const Image = styled.img`
  margin-top: 5%;
  width: 28%;
  @media screen and (min-width: 300px) and (max-width: 800px) {
    width: 0%;
  }
  @media screen and (min-width: 800px) and (max-width:1000px) {
    width: 25%;
  }
`

export const ImageMehdi = styled.img`
  width: 40%;
  @media screen and (min-width: 300px) and (max-width: 800px) {
    width: 100%;
  }
  @media screen and (min-width: 800px) and (max-width:1000px) {
    width: 55%;
  }
`
