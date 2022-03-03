import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Feb 15, 01:20 PM", 159, 6.0, 24, 4.0),
  createData("Feb 15, 01:20 PM", 237, 9.0, 37, 4.3),
  createData("Feb 15, 01:20 PM", 262, 16.0, 24, 6.0),
  createData("Feb 15, 01:20 PM", 305, 3.7, 67, 4.3),
  createData("Feb 15, 01:20 PM", 356, 16.0, 49, 3.9),
];

export default function DashboardTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Entry #</TableCell>
            <TableCell align="right">Car Plate #&nbsp;(g)</TableCell>
            <TableCell align="right">Client Name&nbsp;(g)</TableCell>
            <TableCell align="right">Goods Qty&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
