import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { PaginateProps } from "@/types";
const Paginate = ({ count, page, updatePersonsList }: PaginateProps) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    updatePersonsList(value);
  };
  return (
    <Stack spacing={2} mt={2}>
      {Math.ceil(count / 5) > 1 && (
        <Pagination
          count={Math.ceil(count / 5)}
          page={page}
          onChange={handleChange}
          variant="outlined"
          color="primary"
        />
      )}
    </Stack>
  );
};

export default Paginate;
