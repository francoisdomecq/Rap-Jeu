import styled from 'styled-components'
import colors from '../../utils/styles/colors'
export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  padding-top: 1%;
  padding-bottom: 1%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom: 5px solid ${colors.yellow};
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 24px;
  color: white;
  background: linear-gradient(90deg, #15008d 0%, #198bf5 100%);
`
export const ContainerTeamAnswer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 19%;
  padding: 1%;
  border-radius: 20px;
  background: rgb(255, 255, 24);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 24, 1) 0%,
    rgba(255, 210, 34, 1) 100%
  );
  opacity: 0.95;
`
export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 90%;
  max-height: 150px;
  min-height: 100px;
  overflow-y: scroll;
  background: linear-gradient(90deg, #15008d 0%, #198bf5 100%);
`

export const RappersContainer = styled.div`
  width: 99%;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 24px;
  color: ${colors.yellow};
`
export const TableBottom = styled.div`
  display: flex;
  padding-bottom: 5%;
  width: 90%;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  background: linear-gradient(90deg, #15008d 0%, #198bf5 100%);
`
export const RapperInput = styled.input`
  text-align: center;
  width: 60%;
  border: 0px solid #000000;
  border-radius: 10px;
  font-family: 'Montserrat', 'sans-serif';
  font-size: 28px;
  font-weight: 700;
  color: white;
  background: linear-gradient(90deg, #15008d 0%, #198bf5 100%);
  background-color: ${colors.yellow};
  ::placeholder {
    text-transform: none;
    text-align: 'center';
    width: 100%;
    font-family: 'Montserrat', 'sans-serif';
    font-size: 28px;
    font-weight: 700;
    color: white;
  }
  &:hover {
    text-underline-position: below;
    text-decoration: underline;
  }
  ::-webkit-search-cancel-button {
    position: relative;
    right: 15px;
    top: 50%;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  height: 100%;
`
export const Line = styled.tr`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  color: white;
  font-size: 18px;
`
export const RapperName = styled.p`
  text-transform: uppercase;
  font-family: 'Montserrat', 'sans-serif';
  font-weight: 700;
`

export const LineContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const RemoveButton = styled.button`
  height: 10%;
  background: rgba(255, 0, 61, 1);
  border-radius: 360px;
  color: white;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Montserrat';
  &:hover {
    cursor: pointer;
  }
`
