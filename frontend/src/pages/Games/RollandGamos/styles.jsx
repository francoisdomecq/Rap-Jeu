import styled from 'styled-components'
import colors from '../../../utils/styles/colors'
import RapperInputBG from '../../../assets/rollandgamos/rappeurInput.svg'
import RapperContainerBG from '../../../assets/rollandgamos/rappeurContainer.svg'
import buttonTeam from '../../../assets/buttonTeam.svg'

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
  width: 50%;
  height: 100%;
`
export const RappeurContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 300px;
  height: 150px;
  background-size: contain;
  background-image: url(${RapperContainerBG});
  background-repeat: no-repeat;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  height: 100%;
`
export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 3%;
  width: 60%;
`
export const Text = styled.p`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 24px;
`
export const RapperInput = styled.input`
  outline: none;
  padding-top: 4%;
  text-align: center;
  border: 0px solid #000000;
  background-color: transparent;
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
  ::-webkit-search-cancel-button {
    position: relative;
    right: 500px;
  }
  width: 100%;
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
export const ContainerTeam = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 325px;
  height: 56px;
  background-size: contain;
  background-image: url(${buttonTeam});
  background-repeat: no-repeat;
  opacity: ${({ isSelected }) => (isSelected ? '0.4' : '1')};
  &:hover {
    cursor: pointer;
  }
`
