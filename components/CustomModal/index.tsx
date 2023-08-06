import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { CustomModalProps } from "@/types";

const CustomModal: React.FC<CustomModalProps> = ({
  open,
  onClose,
  title,
  children,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>انصراف</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomModal;
