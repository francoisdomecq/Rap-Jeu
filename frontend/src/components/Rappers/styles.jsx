import styled from 'styled-components'
import colors from '../../utils/styles/colors'

export const Container = styled.div`
  width: 100%;
  max-height: 350px;
  overflow-y: scroll;
`
export const Table = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${colors.blue};
  border-radius: 20px;
  :hover {
    cursor: pointer;
  }
`

export const TableHead = styled.thead`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${colors.red};
  color: white;
  text-transform: uppercase;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`
export const TableBody = styled.tbody`
  width: 99%;
`
export const LineContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const Line = styled.tr`
  display: flex;
  width: 100%;
  align-self: center;
  justify-content: center;
  text-transform: uppercase;
  font-family: 'Changa One', 'sans-serif';
  font-size: 20px;
  color: white;
  &:hover {
    color: ${colors.red};
  }
`
export const LineSeparator = styled.hr`
  height: 1px;
  width: 100%;
`
