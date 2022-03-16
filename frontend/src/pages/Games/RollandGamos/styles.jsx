import styled from 'styled-components'
import colors from '../../../utils/styles/colors'

const hauteur = window.innerHeight
console.log(hauteur)

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height:100%;
  width: 100%;
`

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const RappeurContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  border-radius: 20px;
  background-color: ${colors.red};
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
`
