import { Box, Button, Paper, TextField, styled } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { todoAdded } from "../features/todo/todoSlice";

const MainContainer = styled(Paper)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 1,
  flexWrap: "nowrap",
  border: "1px solid grey",
  padding: 12,
  margin: '10px 0',
  width: "85%",
  [theme.breakpoints.up("sm")]: {
    width: "40%",
  },
  [theme.breakpoints.up("md")]: {
    width: "25%",
  },
}));

const TodoAdd = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const [todo, setTodo] = useState("");

  const handleSubmitBtn = (e) => {
    e.preventDefault();

    if (!todo) return alert("Please enter a task");

    dispatch(todoAdded(todo));
    console.log("Submit");
    console.log(todo);

    setTodo("");
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MainContainer>
        <form
          style={{
            display: "flex",
            padding: 2,
            gap: 4,
            justifyContent: "center",
            alignItems: "center",
          }}
          onSubmit={handleSubmitBtn}
        >
          <TextField
            inputRef={inputRef}
            placeholder="Enter New Task"
            fullWidth
            size="small"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Button variant="outlined" type="submit" startIcon={<AddIcon />}>
            Add
          </Button>
        </form>
      </MainContainer>
    </Box>
  );
};

export default TodoAdd;
