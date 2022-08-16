import Card from "@mui/material/Card";
import { Box, display, fontSize } from "@mui/system";
import { Button, Container, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


function createData(
  name,monthlyPrice,videoQuality,Resolution,devices
) {
  return { monthlyPrice,videoQuality,Resolution,devices};
}

const rows = [  {"device":'Mobile', 'price':199,'video-quality':'good',"resolution":"480p"},];
console.log(rows)
const SubscriptionTable = () => {
  return (
    <Container maxWidth="lg">
      <Card
        sx={{
          margin: "20px",
          width: "100%",
          height: "100%",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "left",
            paddingRight: "40px",
            paddingLeft: "40px",
            paddingY: "20px",
          }}
        >
          <Typography sx={{ fontSize: "30px", fontWeight: "700" }}>
            Choose the plan that’s right for you
          </Typography>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>      </TableCell>
                  <TableCell align="right">Mobile</TableCell>
                  <TableCell align="right">Basic</TableCell>
                  <TableCell align="right">Standard</TableCell>
                  <TableCell align="right">premium</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="column">
                      {row}
                    </TableCell>
                    <TableCell align="right">{row.monthlyPrice}</TableCell>
                    <TableCell align="right">{row.videoQuality}</TableCell>
                    <TableCell align="right">{row.Resolution}</TableCell>
                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Card>
    </Container>
  );
};

export default SubscriptionTable;
