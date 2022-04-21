import React from 'react'
import ReactDOM from 'react-dom'
import {
  Iframe,
  ModalOverlay,
  ModalWrapper,
  ModalDiv,
  ModalHeader,
  ModalCloseButton,
  ModalTitle,
  ModalRound,
  ModalRules,
  ModalBody,
} from './styles'
import { RulesData } from './rules'

function Modal({ isShowing, hide, title, ...props }) {
  const rules = RulesData.find((game) => game.game === title)
  return isShowing
    ? ReactDOM.createPortal(
        <>
          <ModalOverlay>
            <ModalWrapper>
              <ModalDiv>
                <ModalHeader>
                  <ModalTitle>{rules.game}</ModalTitle>

                  <ModalCloseButton type="button" onClick={hide}>
                    <span>&times;</span>
                  </ModalCloseButton>
                </ModalHeader>
                <ModalRound>{rules.manches}</ModalRound>
                <ModalBody>
                  <ModalRules>
                    <p>{rules.rules}</p>
                  </ModalRules>
                  <Iframe
                   
                    src={rules.video}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></Iframe>
                </ModalBody>
              </ModalDiv>
            </ModalWrapper>
          </ModalOverlay>
        </>,
        document.body
      )
    : null
}

export default Modal
