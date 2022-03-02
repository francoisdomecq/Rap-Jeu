import styled, { keyframes } from 'styled-components'
 
const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
 
    to {
    transform: rotate(360deg);
    }
`
 
const Loader = styled.img`
    border-bottom-color: transparent;
    animation: ${rotate} 2s infinite linear;
    height: 20%;
    width: 20%;
`

export default Loader 