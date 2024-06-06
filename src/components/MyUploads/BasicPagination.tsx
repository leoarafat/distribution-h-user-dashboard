import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export interface BasicPaginationProps {
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function BasicPagination({
  totalPages,
  onPageChange,
}: BasicPaginationProps) {
  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    onPageChange(page); // Notify parent component about page change
  };

  return (
    <Stack spacing={2}>
      <Pagination count={totalPages} onChange={handleChange} />
    </Stack>
  );
}
