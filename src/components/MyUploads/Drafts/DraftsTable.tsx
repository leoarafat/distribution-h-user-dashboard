import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import { EditIcon } from "lucide-react";
import { Link } from "react-router-dom";
type ReleaseFormData = {
  version: string;
  releaseTitle: string;
  genre?: string;
  subgenre?: string;
  upc?: string;
  cLine?: string;
  pLine?: string;
};
const DraftsSongsTable = () => {
  const [releaseForm, setReleaseForm] = useState<ReleaseFormData | null>(null);

  useEffect(() => {
    const releaseFormData = localStorage.getItem("releaseFormData");

    if (releaseFormData) {
      setReleaseForm(JSON.parse(releaseFormData));
    }
  }, []);

  return (
    <>
      <Paper sx={{ mt: 3 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Cover</TableCell>
                <TableCell>Sub Title</TableCell>
                <TableCell>Release Title</TableCell>
                <TableCell>Genre</TableCell>
                <TableCell>Sub Genre</TableCell>
                <TableCell>UPC</TableCell>
                <TableCell>cLine</TableCell>
                <TableCell>pLine</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <img
                    className="w-[70px] h-[40px] rounded-md "
                    src="empty"
                    alt="Cover Image"
                  />
                </TableCell>
                <TableCell>{releaseForm && releaseForm?.version}</TableCell>
                <TableCell>
                  {releaseForm && releaseForm?.releaseTitle}
                </TableCell>
                <TableCell>
                  {releaseForm && releaseForm?.genre ? releaseForm?.genre : "-"}
                </TableCell>
                <TableCell>
                  {releaseForm && releaseForm?.subgenre
                    ? releaseForm?.subgenre
                    : "-"}
                </TableCell>
                <TableCell>
                  {releaseForm && releaseForm.upc ? releaseForm.upc : "-"}
                </TableCell>

                <TableCell>
                  {releaseForm && releaseForm.cLine ? releaseForm.cLine : "-"}
                </TableCell>
                <TableCell>
                  {releaseForm && releaseForm.pLine ? releaseForm.pLine : "-"}
                </TableCell>
                <TableCell>
                  <Link to={"/single"}>
                    <EditIcon />
                  </Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default DraftsSongsTable;
