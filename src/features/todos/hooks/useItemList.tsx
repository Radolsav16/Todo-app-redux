import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../app/hooks";
import { Todo } from "../types";
import { selectTodosState } from "../../../app/selectors/todosSelector";
import { useEffect } from "react";
import { fetchTodos } from "../todosThunks";

export const useItemList = () =>{
  const dispatch = useAppDispatch();
  const { status, error,items } = useSelector(selectTodosState);



  const todos: [string, Todo][] = Object.entries(items);


  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return {
    todos,
    status,
    error
  }

}