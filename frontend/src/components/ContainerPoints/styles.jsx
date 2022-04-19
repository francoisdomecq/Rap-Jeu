import styled from 'styled-components'
import colors from '../../utils/styles/colors'

export const ContainerColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

export const ContainerScoreSelection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2%;
  padding: 2%;
  width: 100%;
  border-radius: 20px;
  background: rgb(255, 255, 24);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 24, 1) 0%,
    rgba(255, 210, 34, 1) 100%
  );
  opacity: 1;
  box-shadow: 1px 1px 1px ${colors.blue};
`
export const ContainerScore = styled.div`
  display: flex;
  justify-content: flex-start;
  border-radius: 10px;
  width: 40%;
  padding: 2%;
  background: linear-gradient(90deg, #15008d 0%, #198bf5 100%);
`
export const ButtonScore = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  ::placeholder {
    color: white;
  }
`
