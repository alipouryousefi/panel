import {
  CustomButton,
  CustomModal,
  TableContent,
  CreatePerson,
} from "@/components";
import { Box } from "@mui/material";
import { useToggle } from "../hook";

export default function Home() {
  const [isToggled, toggle] = useToggle(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <CustomButton title="ایجاد کاربر" onClick={toggle} />
      <TableContent />
      <CustomModal
        onClose={toggle}
        open={isToggled}
        title="ایچاد کاربر چدید"
      >
        <CreatePerson />
      </CustomModal>
    </Box>
  );
}
