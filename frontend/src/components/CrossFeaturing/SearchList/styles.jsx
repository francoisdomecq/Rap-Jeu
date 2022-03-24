import styled from 'styled-components'
import colors from '../../../utils/styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const TableContainer = styled.div`
  display: flex;
  width: 100%;
  max-height: 380px;
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
  :hover {
    cursor: pointer;
  }
`

export const TableHead = styled.thead`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 2%;
  padding-right: 2%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  color: white;
  font-family: 'Montserrat';
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  background-color: ${colors.red};
`

export const TableSearch = styled.input`
  outline: none;
  padding-top: 4%;
  text-align: center;
  border: 0px solid #000000;
  background-color: transparent;
  text-transform: uppercase;
  color: white;
  font-family: 'Montserrat', 'sans-serif';
  font-size: 24px;
  font-weight: 700;
  ::placeholder {
    color: white;
    text-align: 'center';
    font-family: 'Montserrat', 'sans-serif';
    font-size: 24px;
    font-weight: 700;
    width: 100%;
    text-transform: none;
  }
  &:hover {
    text-underline-position: below;
    text-decoration: underline;
  }
  width: 75%;
`

export const TableBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2% 0% 2% 0%;
  height: 10%;
  width: 100%;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: ${colors.red};
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
  justify-content: center;
  width: 100%;
  color: white;
  font-size: 18px;
  &:hover {
    color: ${colors.yellow};
    font-size: 24px;
  }
`

export const RapperName = styled.p`
  text-transform: uppercase;
  font-family: 'Montserrat', 'sans-serif';
  font-weight: 700;
`
export const LineSeparator = styled.hr`
  height: 1px;
  width: 100%;
`
export const SearchDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
