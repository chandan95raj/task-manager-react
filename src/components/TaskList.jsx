import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid"
const TaskList = () => {
    return (

        <Grid container justifyContent="center"
            alignItems="center" sx={{ pt: 4 }}>
            <Grid item xs={12} md={7}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Created At</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow
                                key="1"
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    1
                                </TableCell>
                                <TableCell>Chandan</TableCell>
                                <TableCell>Chandan is a good boy</TableCell>
                                <TableCell>02-06-2024</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>


        </Grid>

    );
}
export default TaskList