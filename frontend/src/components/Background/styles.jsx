import styled from 'styled-components'

export const ContainerZIndex = styled.div`
  position: absolute;
  height: 90%;
  width: 100%;
  z-index: -1;
`
export const ContainerRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`
export const Image = styled.img`
  margin-top: 5%;
  @media screen and (min-width: 300px) and (max-width: 1250px) {
    width: 25%;
  }
`

export const ImageMehdi = styled.img`
  width: 45%;
  height: 100%;
  @media screen and (min-width: 300px) and (max-width: 900px) {
    width: 50%;
  }
`
