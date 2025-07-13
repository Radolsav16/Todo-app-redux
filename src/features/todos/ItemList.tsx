import React, { ReactElement, useEffect } from "react";
import TodoListItem from "./TodoListItem";
import { useAppDispatch} from "../../app/hooks";
import { fetchTodos } from "./todosThunks";
import { selectSortedTodos,  selectTodosState } from "../../app/selectors/todosSelector";
import { useSelector } from "react-redux";

const ItemList: React.FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const sortedTodos = useSelector(selectSortedTodos);
  const { status, error } = useSelector(selectTodosState);


  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>{error}</p>;

  

  return (
    <ul className="list-group mb-0">
      {sortedTodos.map((todo) => (
        <TodoListItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
};

export default ItemList;
