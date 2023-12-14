/* eslint-disable react/prop-types */

import { IoIosClose } from "react-icons/io";
import { Box, Modal } from "@mui/material";
import { ModalTitle, Header, ModalBody } from "./modal.styles";

export default function Main(props) {
  const { children, isOpen, closeFunc, title, withCloseButton = true } = props;

  return (
    <Modal open={isOpen} onClose={closeFunc}>
      <ModalBody>
        <Header>
          {title && <ModalTitle>{title}</ModalTitle>}
          {withCloseButton && (
            <IoIosClose onClick={() => closeFunc()} className="icon" />
          )}
        </Header>
        <Box>{children}</Box>
      </ModalBody>
    </Modal>
  );
}
