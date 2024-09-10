/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";
import { useGetCorrectionVideoQuery } from "@/redux/slices/myUploads/myUploadsApi";
import { imageURL } from "@/redux/api/baseApi";
import Loader from "@/utils/Loader";
import { ShieldAlert } from "lucide-react";
import CorrectionMessageModal from "./CorrectionMessageModa";
import CorrectionVideoMessageModal from "./CorrectionMessageModa";
const CorrectionVideosTable = ({ searchQuery }: any) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [correctionMessage, setCorrectionMessage] = useState(null);
  const { data: songsData, isLoading } = useGetCorrectionVideoQuery({});
  const [open, setOpen] = useState(false);

  const handleClickOpen = (corrections: any) => {
    setOpen(true);
    setCorrectionMessage(corrections);
  };

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //@ts-ignore
  const rows = songsData?.data?.data;

  const filteredRows = rows?.filter(
    (row: any) =>
      (row.videoId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.title.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (status === "" || row.isApproved === status)
  );
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Paper sx={{ mt: 3 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Cover</TableCell>
                <TableCell>ReleaseID</TableCell>
                <TableCell>Song Type</TableCell>
                <TableCell>Release Title</TableCell>
                <TableCell>Label</TableCell>
                <TableCell>Release Date</TableCell>
                <TableCell>UPC</TableCell>

                <TableCell>Catalog Number</TableCell>
                <TableCell>Correction Message</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: any, index: any) => (
                  <TableRow key={index}>
                    <TableCell>
                      <img
                        className="w-[70px] h-[40px] rounded-md "
                        src={`${row?.image}`}
                        alt=""
                      />
                    </TableCell>
                    <TableCell>{row.videoId}</TableCell>
                    <TableCell>{row.videoType}</TableCell>
                    <TableCell>{row.title}</TableCell>

                    <TableCell>{row.label?.labelName}</TableCell>
                    <TableCell>{row.storeReleaseDate}</TableCell>
                    <TableCell>{row.upc ? row.upc : "-"}</TableCell>

                    <TableCell>
                      {row.catalogNumber ? row.catalogNumber : "-"}
                    </TableCell>
                    <TableCell>
                      <ShieldAlert
                        size={30}
                        className="text-center cursor-pointer w-full"
                        onClick={() => handleClickOpen(row._id)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredRows?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <CorrectionVideoMessageModal
        open={open}
        setOpen={setOpen}
        data={correctionMessage}
      />
    </>
  );
};

export default CorrectionVideosTable;
