import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import CustomButton from "../CustomButton";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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

const TableContent: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ردیف</StyledTableCell>
              <StyledTableCell align="right"> کد ملی</StyledTableCell>
              <StyledTableCell align="right">
                نام و نام خانوادگی
              </StyledTableCell>
              <StyledTableCell align="right">تحصیالت</StyledTableCell>
              <StyledTableCell align="right">وضعیت</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow key={"ssss"}>
              <StyledTableCell component="th" scope="row">
                sss{" "}
              </StyledTableCell>
              <StyledTableCell align="right">ssss</StyledTableCell>
              <StyledTableCell align="right">dddd</StyledTableCell>
              <StyledTableCell align="right">asdasdasd</StyledTableCell>
              <StyledTableCell align="right">asdasdasd</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableContent;
