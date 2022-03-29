import styled from 'styled-components'
import colors from '../../../utils/styles/colors'
import RapperInputBG from '../../../assets/rollandgamos/rappeurInput.svg'
import RapperContainerBG from '../../../assets/rollandgamos/rappeurContainer.svg'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100%;
`
export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 30%;
  height: 100%;
`
export const RappeurContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
 
  background-size: contain;
  background-image: url(${RapperContainerBG});
  background-repeat: no-repeat;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`
export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10%;
  width: 100%;
`
export const Text = styled.p`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 24px;
`
export const RapperInput = styled.input`
  text-align: center;
  background-color: ${colors.yellow};
  border: 0px solid #000000;
  border-radius: 20px;
  font-family: 'Montserrat', 'sans-serif';
  font-size: 24px;
  font-weight: 700;
  color: white;
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
  ::-webkit-search-cancel-button {
    position: relative;
    right: 15px;
    top: 50%;
  }
  width: 200px;
  height: 60px;
  background-size: contain;
  background-image: url(${RapperInputBG});
  background-repeat: no-repeat;
`
export const SearchInput = styled.input`
  text-align: center;
  background-color: ${colors.yellow};
  border: 0px solid #000000;
  border-radius: 20px;
  font-family: 'Montserrat', 'sans-serif';
  font-size: 24px;
  font-weight: 700;
  color: white;
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
  ::-webkit-search-cancel-button {
    position: relative;
    right: 15px;
    top: 50%;
  }
  width: 200px;
  height: 60px;
  background-size: contain;
  background-image: url(${RapperInputBG});
  background-repeat: no-repeat;
`

export const NextRoundButton = styled.button`
  background-color: ${colors.red};
  font-family: 'Montserrat', 'sans-serif';
  font-size: 24px;
  font-weight: 700;
  width: 45%;
  border-radius: 20px;
  color: white;
  &:hover {
    cursor: pointer;
  }
`
export const Header = styled.div`
  padding-top: 1%;
  padding-bottom: 1%;
  width: 30%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background: linear-gradient(90deg, #15008d 0%, #198bf5 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 24px;
  color: white;
  border-bottom: 5px solid ${colors.yellow};
`
export const RappersContainer = styled.div`
  min-height: 50px;
  max-height: 350px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;
  background: linear-gradient(90deg, #15008d 0%, #198bf5 100%);
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 24px;
  color: ${colors.yellow};
`
export const TableBottom = styled.div`
  height: 20px;
  width: 30%;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  background: linear-gradient(90deg, #15008d 0%, #198bf5 100%);
`

