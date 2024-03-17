import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("todo")) || [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    todoAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(todo, completed = false) {
        let storeData = {
          id: nanoid(),
          todo,
          completed,
          createdAt: new Date(),
        };

        // LOCAL_STORAGE
        let arr = JSON.parse(localStorage.getItem("todo")) || [];
        arr.push(storeData);
        localStorage.setItem("todo", JSON.stringify(arr));

        return {
          payload: storeData,
        };
      },
    },
    todoCompleted: (state, action) => {
      const id = action.payload;
      const completed = state.find((state) => state.id === id);
      if (completed) {
        completed.completed = !completed.completed;
      }
      updateLocalStorage(state);
    },
    todoRemoved: (state, action) => {
      const id = action.payload;
      state.splice(
        state.findIndex((s) => s.id === id),
        1
      );
      updateLocalStorage(state);
    },
  },
});

const updateLocalStorage = (state) => {
  localStorage.setItem("todo", JSON.stringify(state));
};

export const getAllTodos = (state) => state.todo;

export const { todoAdded, todoCompleted, todoRemoved } = todoSlice.actions;

export default todoSlice.reducer;
