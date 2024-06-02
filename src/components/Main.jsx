import Container from "@mui/material/Container"
import TaskList from "./TaskList"
import CreateTask from "./CreateTask"
import { useState } from "react"
import { Button, Stack, Typography } from '@mui/material'
import { PlusCircleIcon, List } from 'lucide-react'
const Main = () => {

  const [title, setTitle] = useState("Add New Task");
  const [openForm, setOpenForm] = useState(false);
  const addTask = () => {
    setOpenForm(!openForm);
    setTitle("Task List");
  };
  return (
    <>
      <Container sx={{ py: 4 }} className='text-center'>
        <Button variant="contained" color="primary" onClick={addTask}>
          <Stack direction="row" spacing={1}>
            {title === "Add New Task" ? <PlusCircleIcon /> : <List />}
            <Typography variant='p'>
              {title}
            </Typography>
          </Stack>
        </Button>
        {openForm ? <CreateTask /> : <TaskList />}

      </Container>
    </>
  )
}

export default Main