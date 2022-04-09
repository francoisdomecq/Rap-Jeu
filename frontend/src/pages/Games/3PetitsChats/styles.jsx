import styled from 'styled-components'
import colors from '../../../utils/styles/colors'
import RapperInputBG from '../../../assets/rollandgamos/rappeurInput.svg'
import Continuer from '../../../assets/continuer.svg'

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  height: 100%;
`

export const Header = styled.div`
  padding-top: 1%;
  padding-bottom: 1%;
  width: 40%;
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
  width: 40%;
  height: 100%;
  background: linear-gradient(90deg, #15008d 0%, #198bf5 100%);
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 24px;
  color: ${colors.yellow};
`
export const TableBottom = styled.div`
  height: 20px;
  width: 40%;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  background: linear-gradient(90deg, #15008d 0%, #198bf5 100%);
`

export const RapperInput = styled.input`
  text-align: center;
  border: 0px solid #000000;
  border-radius: 20px;
  font-family: 'Montserrat', 'sans-serif';
  font-size: 36px;
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
  background: linear-gradient(90deg, #15008d 0%, #198bf5 100%);
  width: 60%;
  
`

export const ContainerNewRapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2%;
  padding-bottom: 1%;
  width: 30%;
  border-radius: 20px;
  background: rgb(255, 255, 24);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 24, 1) 0%,
    rgba(255, 210, 34, 1) 100%
  );
`
export const ContinuerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url(${Continuer});
  background-repeat: no-repeat;
  background-size: contain;
  width: 326px;
  height: 105px;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Montserrat';
  color: white;
  &:hover {
    cursor: pointer;
  }
  padding-right: 1%;
`
