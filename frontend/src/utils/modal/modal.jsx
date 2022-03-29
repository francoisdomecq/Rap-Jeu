import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {
  ModalOverlay,
  ModalWrapper,
  ModalDiv,
  ModalHeader,
  ModalCloseButton,
  ModalTitle,
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
                <div className="modal-body">{rules.manches}</div>
                <div>{rules.rules}</div>
              </ModalDiv>
            </ModalWrapper>
          </ModalOverlay>
        </>,
        document.body
      )
    : null
}

export default Modal
