import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  top: 0;
`

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ErrorTitle = styled.h1`
  font-size: 70px;
  color: white;
  -webkit-text-stroke: 1px black;
  font-family: 'Changa One', 'sans-serif';
`

export const ErrorSubtitle = styled.h2`
  font-size: 24px;
  color: white;
  -webkit-text-stroke: 0.5px black;
  font-family: 'Changa One', 'sans-serif';
`

export const Illustration = styled.img`
  max-width: 800px;
`

export const Redirect = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 10px;

  background: #f2a616;
  width: 200px;
  height: 50px;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 35px;
  font-family: 'Changa One', 'sans-serif';
`
