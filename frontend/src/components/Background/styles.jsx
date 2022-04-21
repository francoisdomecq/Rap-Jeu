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
`
export const Image = styled.img`
  margin-top: 5%;
  width: 28%;
  @media screen and (min-width: 300px) and (max-width: 1300px) {
    width: 25%;
  }
`

export const ImageMehdi = styled.img`
  width: 40%;
  @media screen and (min-width: 300px) and (max-width: 1300px) {
    width: 40%;
  }
`
