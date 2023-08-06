"use client";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import { Person, TableContentProps } from "@/types";
import { CheckCircleOutline, CancelOutlined } from "@mui/icons-material";
import { StyledTableCell, StyledTableRow } from "@/styles/styles";

const TableContent = ({ persons, page }: TableContentProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: 340 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ردیف</StyledTableCell>
              <StyledTableCell align="center"> کد ملی</StyledTableCell>
              <StyledTableCell align="center">
                نام و نام خانوادگی
              </StyledTableCell>
              <StyledTableCell align="center">تحصیلات</StyledTableCell>
              <StyledTableCell align="center">وضعیت</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {persons?.length !== 0 ? (
              persons.map((person: Person, index: number) => (
                <StyledTableRow key={index + 1 + (page - 1) * 5}>
                  <StyledTableCell component="th" scope="row">
                    {index + 1 + (page - 1) * 5}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {person.nationalCode}
                  </StyledTableCell>
                  <StyledTableCell align="center">{`${person.firstName} ${person.lastName}`}</StyledTableCell>
                  <StyledTableCell align="center">
                    {person.education}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {person.status ? (
                      <CheckCircleOutline
                        fontSize="small"
                        style={{ color: "#00C853" }}
                      />
                    ) : (
                      <CancelOutlined
                        fontSize="small"
                        style={{ color: "#FF1744" }}
                      />
                    )}
                  </StyledTableCell>
                </StyledTableRow>
              ))
            ) : (
              <StyledTableRow>
                <StyledTableCell
                  component="th"
                  scope="row"
                  colSpan={5}
                  align="center"
                >
                  کاربری برای نمایش یافت نشد
                </StyledTableCell>
              </StyledTableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableContent;
