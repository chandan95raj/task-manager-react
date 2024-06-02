import { Button, FormControl, Grid, TextField } from "@mui/material";
const CreateTask = () => {
    return (
        <Grid container justifyContent="center"
            alignItems="center" sx={{ pt: 5 }}>
            <Grid item xs={12} md={7} className="shadow p-4">
                <form>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Title"
                                    placeholder="Enter Title"
                                />
                            </FormControl>

                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Description"
                                    placeholder="Enter Description"
                                />
                            </FormControl>

                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="success">Submit</Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>


        </Grid>
    )
}

export default CreateTask