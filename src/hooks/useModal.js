import { useCallback, useContext } from "react";
import { ModalContext } from "../contexts/Modal";

function useModal(Modal) {
  const { handleOpen, handleDismiss } = useContext(ModalContext);

  const onOpen = useCallback(() => {
    handleOpen(Modal);
  }, [Modal, handleOpen]);

  return [onOpen, handleDismiss];
}

export default useModal;
