import { createTheme } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import { styled } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Shabnam, sans-serif",
  },
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const BlurOverlayContainer = styled("div")(({ theme }) => ({
  backdropFilter: "blur(8px)",
  backgroundColor: "rgba(0, 0, 0, 0.2)", // You can adjust the opacity here
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  zIndex: 10,
}));

const MainWrapper = styled("div")(({ theme }) => ({
  border: "1px solid #ccc",
  borderRadius: "10px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  background: "#fafafa",
  padding: "30px",
  maxWidth: "800px",
  margin: "30px auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  position: "relative",
}));

const ButtonWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  marginBottom: "10px",
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#07989f",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: 100,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const TableWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  minWidth: "400px",
}));

export {
  theme,
  cacheRtl,
  BlurOverlayContainer,
  MainWrapper,
  ButtonWrapper,
  StyledTableCell,
  StyledTableRow,
  TableWrapper,
};
