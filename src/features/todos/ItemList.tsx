import React, { ReactElement} from "react";
import TodoListItem from "./TodoListItem";
import { useItemList } from "./hooks/useItemList";




const ItemList: React.FC = (): ReactElement => {
    const {todos,status,error} = useItemList()
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
