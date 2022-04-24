import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
 
    to {
    transform: rotate(360deg);
    }
`

export const Loader = styled.img`
  border-bottom-color: transparent;
  animation: ${rotate} 2s infinite linear;

  width: 50%;
`

export const LoaderWrapper = styled.div`
  margin-top: 10%;
  margin-bottom: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Loader
