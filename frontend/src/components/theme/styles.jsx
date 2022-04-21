import styled from 'styled-components'
import colors from '../../utils/styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  opacity: 0.95;
  @media screen and (min-width: 300px) and (max-width: 500px) {
    width: 80%;
  }
  
`
export const TableHead = styled.thead`
  display: flex;
  justify-content: center;
  text-align: center;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  color: ${colors.blue};
  font-family: 'Montserrat';
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  background: rgb(255, 255, 24);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 24, 1) 0%,
    rgba(255, 210, 34, 1) 100%
  );
  @media screen and (min-width: 300px) and (max-width: 1000px) {
    font-size: 12px;
  }
`

export const TableContainer = styled.div`
  display: flex;
  width: 100%;
  max-height: 380px;
  overflow-y: scroll;
  @media screen and (min-width: 300px) and (max-width: 1000px) {
    max-height: 250px;
  }
`
export const Table = styled.table`
  text-align: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #15008d 0%, #198bf5 100%);
  :hover {
    cursor: pointer;
  }
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
  font-size: 18px;
  color: ${({ isChosen }) => (isChosen ? `${colors.red}` : 'white')};
  &:hover {
    color: ${({ isChosen }) =>
      isChosen ? `${colors.red}` : `${colors.yellow}`};
  }
  @media screen and (min-width: 300px) and (max-width: 900px) {
    font-size: 12px;
  }
`

export const QuestionTheme = styled.p`
  text-transform: uppercase;
  font-family: 'Montserrat', 'sans-serif';
  font-weight: 700;
`

export const TableBottom = styled.div`
  padding: 2% 0% 2% 0%;
  height: 10%;
  width: 100%;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  background: rgb(255, 255, 24);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 24, 1) 0%,
    rgba(255, 210, 34, 1) 100%
  );
`
