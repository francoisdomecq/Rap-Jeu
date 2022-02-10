import styled from 'styled-components'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  background-color: #FFD222
`


function Footer() {
  return (
    <FooterContainer/>
  )
}

export default Footer
