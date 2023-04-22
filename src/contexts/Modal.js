import React, { createContext, useCallback, useState } from "react";
import styled from "styled-components";

export const ModalContext = createContext();

const Provider = ({ children }) => {
  const [modal, setModal] = useState(undefined);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback((Modal) => {
    setModal(Modal);
    setIsOpen(true);
  }, []);

  const handleDismiss = useCallback(() => {
    setModal(undefined);
    setIsOpen(false);
  }, []);

  return (
    <ModalContext.Provider value={{ isOpen, handleDismiss, handleOpen }}>
      {children}
      {isOpen && React.isValidElement(modal) && (
        <ModalWrapper>
          {React.cloneElement(modal, {
            handleDismiss,
          })}
        </ModalWrapper>
      )}
    </ModalContext.Provider>
  );
};

const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 99999;
`;

export default Provider;
