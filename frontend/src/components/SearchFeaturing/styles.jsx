import styled from 'styled-components'
import colors from '../../utils/styles/colors'

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  width: 80%;
  margin-bottom: 2%;
  margin-top: 2%;
  border-radius: 20px;
  background: rgb(255, 255, 24);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 24, 1) 0%,
    rgba(255, 210, 34, 1) 100%
  );
  opacity: 0.95;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`

export const SearchInput = styled.input`
  text-align: center;
  width: 40%;
  border: 0px solid #000000;
  border-radius: 10px;
  font-family: 'Montserrat', 'sans-serif';
  font-size: 22px;
  font-weight: 700;
  color: white;
  background: linear-gradient(90deg, #15008d 0%, #198bf5 100%);
  background-color: ${colors.yellow};
  ::placeholder {
    color: white;
    text-align: 'center';
    font-family: 'Montserrat', 'sans-serif';
    font-size: 28px;
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
  @media screen and (min-width: 300px) and (max-width: 600px) {
    font-size: 8px;
    ::placeholder {
      font-size: 28px;
    }
  }
  @media screen and (min-width: 600px) and (max-width: 900px) {
    font-size: 18px;
    ::placeholder {
      font-size: 18px;
    }
  }
`

export const SearchLogos = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin-top: 3%;
`
export const Text = styled.p`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 24px;
`
export const Image = styled.img`
  width: 96px;
  height: 96px;
  @media screen and (min-width: 300px) and (max-width: 600px) {
    width: 24px;
    height: 24px;
  }
  @media screen and (min-width: 600px) and (max-width: 900px) {
    width: 48px;
    height: 48px;
  }
`
