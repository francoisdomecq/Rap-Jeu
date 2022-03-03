import { useState, useEffect } from 'react'
import RappeurArray from '../../../components/Rappers'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

function RollandGamos() {
  return (
    <Container>
      <RappeurArray />
    </Container>
  )
}

export default RollandGamos
