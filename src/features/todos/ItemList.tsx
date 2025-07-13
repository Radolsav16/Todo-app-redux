import React, { ReactElement, useEffect } from "react";
import TodoListItem from "./TodoListItem";
import { useAppDispatch} from "../../app/hooks";
import { fetchTodos } from "./todosThunks";
import { selectTodosState } from "../../app/selectors/todosSelector";
import { useSelector } from "react-redux";
import Todo from "./types";




const ItemList: React.FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { status, error,items } = useSelector(selectTodosState);



  const todos: [string, Todo][] = Object.entries(items);


  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>{error}</p>;



  return (
    <ul className="list-group mb-0">
      {todos.map(([id,obj]) => (
        <TodoListItem
          key={id}
          id={id}
          text={obj.text}
          completed={obj.completed}
        />
      ))}
    </ul>
  );
};

export default ItemList;
