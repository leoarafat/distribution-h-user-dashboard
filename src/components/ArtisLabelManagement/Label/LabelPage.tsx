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
  Typography,
  IconButton,
  TextField,
  Button,
  TableSortLabel,
  TablePagination,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import AddLabelModal from "./AddLabelModa";
import {
  useDeleteLabelMutation,
  useEditLabelMutation,
  useGetLabelsQuery,
} from "@/redux/slices/ArtistAndLabel/artistLabelApi";
import Loader from "@/utils/Loader";
import toast from "react-hot-toast";

const LabelManage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [editMode, setEditMode] = useState<any>({});
  const [editRowData, setEditRowData] = useState<any>({});
  const { data: labelsData, isLoading } = useGetLabelsQuery({});
  const [deleteLabel] = useDeleteLabelMutation();
  const [updateLabel] = useEditLabelMutation();

  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const handlePageChange = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const showModal = () => {
    setOpen(true);
  };

  const handleEditClick = (id: string, rowData: any) => {
    setEditMode({ ...editMode, [id]: true });
    setEditRowData(rowData);
  };

  const handleSaveClick = async (id: string) => {
    try {
      const res = await updateLabel({ id, ...editRowData });

      if (res?.data?.success === true) {
        toast.success("Label Updated");
        setEditMode({ ...editMode, [id]: false });
      }
    } catch (error: any) {
      toast.error(error?.message);
    }
  };

  const handleInputChange = (e: any, field: string) => {
    setEditRowData({ ...editRowData, [field]: e.target.value });
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteLabel(id);

      if (res?.data?.success === true) {
        toast.success("Label Deleted");
      }
    } catch (error: any) {
      toast.error(error?.message);
    }
  };

  //@ts-ignore
  const labelData = labelsData?.data?.data;
  if (!labelData) {
    return (
      <div>
        <h1>Data Is Empty</h1>
      </div>
    );
  }
  const filteredLabelData = labelData?.filter((row: any) =>
    row.labelName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Label Manage
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <TextField
          label="Search"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          InputProps={{
            //@ts-ignore
            startAdornment: <SearchIcon position="start" />,
          }}
        />
        <Button
          onClick={showModal}
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
        >
          Add Label
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>
                <TableSortLabel>labelName</TableSortLabel>
              </TableCell>
              <TableCell>Youtube Channel</TableCell>
              <TableCell>Youtube URL</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredLabelData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any, index: any) => (
                <TableRow key={index}>
                  <TableCell>{row.labelId}</TableCell>
                  <TableCell>
                    {editMode[row._id] ? (
                      <TextField
                        value={editRowData.labelName}
                        onChange={(e) => handleInputChange(e, "labelName")}
                      />
                    ) : (
                      row.labelName
                    )}
                  </TableCell>
                  <TableCell>
                    {editMode[row._id] ? (
                      <TextField
                        value={editRowData.youtubeChannel}
                        onChange={(e) => handleInputChange(e, "youtubeChannel")}
                      />
                    ) : (
                      row.youtubeChannel
                    )}
                  </TableCell>
                  <TableCell>
                    {editMode[row._id] ? (
                      <TextField
                        value={editRowData.youtubeUrl}
                        onChange={(e) => handleInputChange(e, "youtubeUrl")}
                      />
                    ) : (
                      row.youtubeUrl
                    )}
                  </TableCell>
                  <TableCell>
                    {editMode[row._id] ? (
                      <IconButton
                        aria-label="save"
                        onClick={() => handleSaveClick(row._id)}
                      >
                        <SaveIcon />
                      </IconButton>
                    ) : (
                      <IconButton
                        aria-label="edit"
                        onClick={() => handleEditClick(row._id, row)}
                      >
                        <EditIcon />
                      </IconButton>
                    )}
                    <IconButton
                      onClick={() => handleDelete(row?._id)}
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredLabelData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
      <AddLabelModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default LabelManage;
