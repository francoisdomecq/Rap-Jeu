import styled from 'styled-components'
import colors from '../../utils/styles/colors'

export const Container = styled.div`
  width: 30%;
  max-height: 300px;
  overflow-y: scroll;
`
export const Table = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  heigth: 100%;
  background-color: ${colors.blue};
  color: ${colors.yellow};
  border-radius: 20px;
`

export const TableHead = styled.thead`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  background-color: ${colors.red};
  color: white;
  text-transform: uppercase;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`
