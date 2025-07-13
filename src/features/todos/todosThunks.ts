import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Todo from "./types";

const baseUrl =
  "https://todo-app-redux-53d66-default-rtdb.europe-west1.firebasedatabase.app/todos.json";
const changeUrl =
  "https://todo-app-redux-53d66-default-rtdb.europe-west1.firebasedatabase.app/todos";

export const fetchTodos = createAsyncThunk<{ [key: string]: Todo }>(
  "todos/fetchTodos",
  async () => {
    const res = await axios.get(baseUrl);

    return res.data;
  }
);

export const deleteTodo = createAsyncThunk<string, string>(
  "todos/deleteTodo",
  async (todoId, thunkAPI) => {
    try {
      await axios.delete(`${changeUrl}/${todoId}.json`);
      return todoId;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "Failed to delete todo");
    }
  }
);

export const addTodo = createAsyncThunk<Todo, Todo>(
  "todos/addTodo",
  async (todo, thunkAPI) => {
    try {
      await axios.post(baseUrl, todo);
      return todo;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "Failed to delete todo");
    }
  }
);

export const makeTodoCheck = createAsyncThunk<string, string>(
  "todos/checkTodo",
  async (todoId, thunkAPI,) => {
    try {
      await axios.put(`${changeUrl}/${todoId}.json`, {complited:true});
      return todoId ;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "Failed to check todo");
    }
  }
);
