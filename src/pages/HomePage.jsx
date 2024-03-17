import React from "react";
import TodoAdd from "../components/TodoAdd";
import {
  getAllTodos,
  todoCompleted,
  todoRemoved,
} from "../features/todo/todoSlice";
import { useSelector, useDispatch } from "react-redux";
import { Box, IconButton, Paper, Typography, styled } from "@mui/material";

import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const HomePage = () => {
  const todoList = useSelector(getAllTodos);
  const dispatch = useDispatch();

  const handleCompleteBtn = (id) => {
    dispatch(todoCompleted(id));
  };

  const handleDeleteBtn = (id) => {
    dispatch(todoRemoved(id));
  };

  const currentTodo = todoList?.map(({ todo, completed, id }) => {
    return (
      <Paper
        onClick={() => handleCompleteBtn(id)}
        elevation={3}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          m: 2,
          borderRadius: 5,
          transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
          "&:hover": {
            cursor: "pointer",
            border: "1px solid #0d0d0d",
            boxShadow:
              "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton>
            {completed ? (
              <CheckCircleOutlineOutlinedIcon />
            ) : (
              <CircleOutlinedIcon />
            )}
          </IconButton>
          <Typography
            sx={{
              textDecoration: completed ? "line-through" : "none",
            }}
          >
            {todo}
          </Typography>
        </Box>
        <IconButton color="error" onClick={() => handleDeleteBtn(id)}>
          <DeleteOutlineIcon />
        </IconButton>
      </Paper>
    );
  });

  return (
    <div>
      <TodoAdd />
      <Box>
        {todoList.length === 0 ? (
          <Paper elevation={1} sx={{ p: 2, m: 1, textAlign: "center" }}>
            <Typography>No todos added yet. Start adding tasks!</Typography>
          </Paper>
        ) : (
          <Box>{currentTodo}</Box>
        )}
      </Box>
    </div>
  );
};

export default HomePage;
