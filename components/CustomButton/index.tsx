import React from "react";
import Button from "@mui/material/Button";
import { CustomButtonProps } from "@/types";
import { Box } from "@mui/material";

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onClick,
  styles,
  color,
  size,
  type = "button",
  disabled = false
}) => {
  return (
    <Box>
      <Button
        variant="contained"
        onClick={onClick}
        sx={{ ...styles }}
        color={color}
        size={size}
        type={type}
        disabled={disabled}
      >
        {title}
      </Button>
    </Box>
  );
};

export default CustomButton;
