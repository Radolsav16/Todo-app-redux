import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Todo } from "../../features/todos/types";

export const selectTodosState = (state:RootState)=>state.todos;

export const selectTodos = (state:RootState) => state.todos.items;

export const selectSortedTodos = createSelector(
  [selectTodos], 
  (todos):Todo[] => {
    if(!todos){
      return [];
    }
    return Object.values(todos).sort((a, b) => Number(b.completed) - Number(a.completed));
  }
);
