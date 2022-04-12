import styled from 'styled-components'
import colors from '../../utils/styles/colors'
export const ContainerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
`
export const ContainerColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;

  border-radius: 20px;
  padding: 0% 0% 1% 0%;
  background: rgb(255, 255, 24);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 24, 1) 0%,
    rgba(255, 210, 34, 1) 100%
  );
  opacity: 1;
  box-shadow: 1px 1px 1px ${colors.blue};
`
export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  max-height: 55px;
  border-radius: 10px;
  background: linear-gradient(90deg, #15008d 0%, #198bf5 100%);
  &:hover {
    cursor: pointer;
  }
`