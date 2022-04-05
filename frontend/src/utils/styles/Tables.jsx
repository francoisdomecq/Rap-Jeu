import styled from 'styled-components'
import colors from './colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const TableContainer = styled.div`
  width: 100%;
  max-height: 380px;
  overflow-y: scroll;
`
export const Table = styled.table`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #15008d 0%, #198bf5 100%);
  :hover {
    cursor: pointer;
  }
`
export const TableHead = styled.thead`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  display: flex;
  justify-content: center;
  padding-bottom: 2%;
  padding-right: 2%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  color: ${colors.blue};
  font-family: 'Montserrat';
  font-size: 18px;
  font-weight: 700;
  background-color: ${colors.yellow};
`
export const TableSearch = styled.input`
  width: 75%;
  text-align: center;
  color: ${colors.blue};
  text-transform: uppercase;
  font-family: 'Montserrat', 'sans-serif';
  font-size: 24px;
  font-weight: 700;
  padding-top: 4%;
  outline: none;
  border: 0px solid #000000;
  background-color: transparent;

  ::placeholder {
    width: 100%;
    text-align: 'center';
    color: ${colors.blue};
    font-family: 'Montserrat', 'sans-serif';
    font-size: 24px;
    font-weight: 700;
    text-transform: none;
  }

  &:hover {
    text-underline-position: below;
    text-decoration: underline;
  }

  ::-webkit-search-cancel-button {
    position: relative;
    right: 15px;
  }
`

export const TableBottom = styled.div`
  padding: 2% 0% 2% 0%;
  height: 10%;
  width: 100%;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: ${colors.yellow};
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
  color: ${({ isChosen }) => (isChosen ? `${colors.red}` : 'white')};
  &:hover {
    color: ${({ isChosen }) =>
      isChosen ? `${colors.red}` : `${colors.yellow}`};
  }
`
export const RapperName = styled.p`
  text-transform: uppercase;
  font-family: 'Montserrat', 'sans-serif';
  font-weight: 700;
`
export const SearchDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
